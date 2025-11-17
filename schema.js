const mongoose=require("mongoose")
let userSchema=mongoose.Schema({
    "name":{type:String, required:true},
    "email":{type:String,required:true},
    "role":{type:String,enum:["admin","user"],default:"user"},
    "password":{type:String,required:true}
});
let user=mongoose.model('user',userSchema);
module.exports=user;