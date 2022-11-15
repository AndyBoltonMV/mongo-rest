const { Router } = require("express");
const User = require("./Model");
const userRouter = Router();

userRouter.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send({ msg: "Successfully created", user: user.username });
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = userRouter;

// const res = await fetch("http://localhost:5001/user", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     username: "AndyC",
//     email: "andyc@email.com",
//     password: "test123",
//   }),
// });
// const data = await res.json();
// data.username;
