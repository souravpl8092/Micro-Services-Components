const express = require("express");
const { userModel } = require("../Models/user.model");

// Router for handling user-related API endpoints.
const userRouter = express.Router();

userRouter.use(express.json());

// PUT endpoint for updating an existing user.
userRouter.put("/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;
  try {
    const user = await userModel.findByIdAndUpdate({ _id: id }, payload);
    res.status(204).send({
      success: true,
      msg: "Successfully Updated the user",
      users: user,
    });
    await user.save();
  } catch (err) {
    console.log({ err: err, msg: " user Update Error!" });
    res.send({ success: false, msg: " user Update Error!", err: err });
  }
});

module.exports = {
  userRouter,
};
