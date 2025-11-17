let mongoose=require("mongoose");
let database=mongoose.connect("mongodb+srv://purkaitsouvik_531:upgXaRGKU1alQs3S@cluster0.tljrxdk.mongodb.net/?appName=Cluster0").then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log(err.message);
});
module.exports=database;