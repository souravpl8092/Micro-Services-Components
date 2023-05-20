const express = require("express");
const { userModel } = require("../Models/user.model");

// Router for handling user-related API endpoints.
const userRouter = express.Router();

userRouter.use(express.json());

// POST endpoint for creating a new user.
userRouter.post("/", async (req, res) => {
  const payload = req.body;
  try {
    const newUser = new userModel(payload);
    await newUser.save();
    res.status(201).json({ newUser, message: "New User successfully Added" });
  } catch (err) {
    console.log("err :", err);
    res.status(400).send({ msg: err });
  }
});

module.exports = {
  userRouter,
};
