let mongoose=require('mongoose');
// MongoDB connection
let database_connect=mongoose.connect("mongodb+srv://purkaitsouvik_531:upgXaRGKU1alQs3S@cluster0.tljrxdk.mongodb.net/?appName=Cluster0")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
module.exports=database_connect;