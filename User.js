const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

let Users= mongoose.model('User', userSchema);
module.exports=Users;
