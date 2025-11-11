let mongoose=require('mongoose');
let table =mongoose.Schema({
    name:String,
    email:String,
    address:String
});
let users=mongoose.model("user",table);
module.exports=users;