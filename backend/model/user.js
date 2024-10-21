const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const user = mongoose.model('user', userschema);
module.exports = user;
