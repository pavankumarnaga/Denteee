// models/UserModel.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  mobileNumber: Number,
  email: String,
  role: String,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
