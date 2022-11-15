require("../db/connection");
const express = require("express");
const userRouter = require("./User");
const app = express();

app.use(express.json());
app.use("/user", userRouter);

app.listen(5001);
