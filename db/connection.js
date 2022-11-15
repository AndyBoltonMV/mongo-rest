require("dotenv").config(); // Npm library for handling .env variables in Node, immediately runs it's config method
const mongoose = require("mongoose"); // Mongoose ODM for interacting with MongoDB databases

// Function for establishing an open and active connection to our cloud hosted MongoDB
const connection = async () => {
  try {
    // Connection method which takes the URI location of our cloud hosted MongoDB, stored in an env var
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

// Immediately calls the connection function
connection();
