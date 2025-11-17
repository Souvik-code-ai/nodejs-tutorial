let express=require("express");
let bcrypt=require("bcrypt");
let dbConnect=require("./db_connection");
// let db=require("./db_connection");
let models=require("./schema");
let app=express();
app.use(express.json());
let router=express.Router();
// let port=4000;
router.post('/user',async (req,res)=>{
    try{
       // let data=await models.create(req.body);
        let hashed_pwd=await bcrypt.hash(req.body.password,10);
        req.body.password=hashed_pwd;
        let data=await models.create(req.body);
        res.status(200).json(data);
      //  console.log(req.body);
    }catch(err){
        res.status(404).json({message:err.message});
    }
});


router.get('/get',async (req,res)=>{
    try{
       // let data=await models.create(req.body);
        // let hashed_pwd=await bcrypt.hash(req.body.password,10);
        // req.body.password=hashed_pwd;
        let data=await models.find({});
        res.status(200).json(data);
       // console.log(req.body);
    }catch(err){
        res.status(404).json({message:err.message});
    }
});
// app.listen(port,()=>{
//     console.log(`erver created at ${port}`);
// });
module.exports=router;