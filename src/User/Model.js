const mongoose = require("mongoose"); // Import Mongoose so we can create models

// Mongoose Schema definition, this defines the structure o our User database model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Mongoose model method creates a Model with our Schema
const User = mongoose.model("User", userSchema);

module.exports = User;
