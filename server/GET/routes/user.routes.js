const express = require("express");
const { userModel } = require("../Models/user.model");

// Router for handling user-related API endpoints.
const userRouter = express.Router();

userRouter.use(express.json());

// GET endpoint for retrieving users based on a query.
userRouter.get("/", async (req, res) => {
  const query = req.query;
  try {
    const users = await userModel.find(query);
    res.send(users);
  } catch (error) {
    console.log(err);
    res.send({ err: "Something went wrong" });
  }
});

// GET endpoint for retrieving a specific user by ID.
userRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findById({ _id: id });
    if (user) {
      res.status(200).json({
        success: true,
        user: user,
      });
    }
  } catch (err) {
    console.log({ err: err });
    res.status(400).send({ success: false, err: err });
  }
});

module.exports = {
  userRouter,
};
