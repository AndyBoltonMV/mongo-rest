const { Router } = require("express"); // Import Router for declaring routes
const User = require("./Model"); // Import User model for affecting the database
const userRouter = Router(); // Declare our local router

// POST route for creating a new user
userRouter.post("/", async (req, res) => {
  try {
    // User.create method inputs new information in a database.
    const user = await User.create(req.body);
    // Sends back an object containing a success message and the username of the newly created User
    res.send({ msg: "Successfully created", user: user.username });
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = userRouter;
