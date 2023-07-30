var mongoose = require('mongoose');

var schema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("users",schema);