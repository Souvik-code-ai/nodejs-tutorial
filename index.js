// console.log("hello world");
const express = require('express');
const import_file = require('./schema.js');
const mongoose = require('mongoose');
let MONGO_URI = "mongodb+srv://purkaitsouvik_531:upgXaRGKU1alQs3S@cluster0.tljrxdk.mongodb.net/?appName=Cluster0";
const app = express();
app.use(express.json());
let port = 8000;
async function start() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("database connected");
    } catch (err) {
        console.log("error", err);
    }
}
start();
app.get('/', (req, res) => {
    res.send("Hello from Node API");
});
app.post('/users', async (req, res) => {
    try {
        const post_users = await import_file.create(req.body);
        res.status(200).json(post_users);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
    // const read_users=await import_file.find({});
    // res.status(200).json(read_users);

});
app.get('/get/users', async (req, res) => {
    try {
        const get_users = await import_file.find({});
        res.status(200).json(get_users);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
    // const read_users=await import_file.find({});
    // res.status(200).json(read_users);

});
app.get('/get/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const get_users_by_id = await import_file.findById(id);
        if(!get_users_by_id){
            res.status(404).json({message:"data not found"});
        }
        res.status(200).json(get_users_by_id);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
    // const read_users=await import_file.find({});
    // res.status(200).json(read_users);

});
app.put('/put/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const put_users_by_id = await import_file.findByIdAndUpdate(id, req.body, { new: true });
        //res.status(200).json(put_users_by_id);
      //  const { id } = req.params;
        const read_users = await import_file.findById(id);
        res.status(200).json(read_users);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
    // const {id}=req.params;
    // const read_users=await import_file.findById(id);
    // res.status(200).json(read_users);

});
// app.get('/get/user/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const get_users_by_id_after_update = await import_file.findById(id);
//         res.status(200).json(get_users_by_id);
//     }
//     catch (err) {
//         res.status(404).json({ message: err.message });
//     }
//     // const read_users=await import_file.find({});
//     // res.status(200).json(read_users);

// });
// app.get('/get/user/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const get_users_by_id_after_update = await import_file.findById(id);
//         res.status(200).json(get_users_by_id);
//     }
//     catch (err) {
//         res.status(404).json({ message: err.message });
//     }
//     // const read_users=await import_file.find({});
//     // res.status(200).json(read_users);

// });
app.delete('/delete/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const get_users_by_id_after_update = await import_file.findByIdAndDelete(id);
        if(get_users_by_id_after_update===null){
            res.status(404).json({message:"data not found"});
        }
        res.status(200).json(get_users_by_id_after_update);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
    // const read_users=await import_file.find({});
    // res.status(200).json(read_users);

});
app.listen(port, () => {
    console.log("server is running on port 8000");
});
// start();
