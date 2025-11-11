let express=require("express");
let router=express.Router();
const app = express();
const User = require('./User');
// Middleware
app.use(express.json()); // to parse JSON request body
// CREATE (POST)
router.post('/users', async (req, res) => {
  console.log(req.body);
  try {
    //const newUser = await new User(req.body);

    console.log(typeof User);
    const savedUser = await User.create(req.body);
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ ALL (GET)
router.get('/users', async (req, res) => {
  try {
  //  User.unshift(savedUser);
    const users = await User.find({}).sort({_id:-1});
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ ONE (GET by ID)
router.get('/users/:id', async (req, res) => {
  try {
    // const user = await User.findById(req.params.id);
    const {id}=req.params;
    const user=await User.findById(id);
    if (!user){
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE (PUT)
router.put('/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedUser){
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE
router.delete('/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if(!deletedUser){
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
module.exports=router;