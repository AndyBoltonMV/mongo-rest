require("../db/connection"); // Run our connection file immediately
const express = require("express"); // Import express
const userRouter = require("./User"); // Import our router for our User model
const app = express(); // Create our web server

app.use(express.json()); // Allow our web server to handle JSON
app.use("/user", userRouter); // Create a "/user" endpoint that all User routes are on

app.listen(5001); // Listen on port 5001
