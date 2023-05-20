const express = require("express");
const { userModel } = require("../Models/user.model");
const CsvParser = require("json2csv").Parser;

// Router for handling user-related API endpoints.
const userRouter = express.Router();

userRouter.use(express.json());

// GET endpoint for exporting user data as a CSV file.
userRouter.get("/", async (req, res) => {
  try {
    let users = [];
    const userData = await userModel.find({});
    userData.forEach((user) => {
      const { _id, name, email, gender, status } = user;
      users.push({ _id, name, email, gender, status });
    });
    const csvFields = ["Name", "Email", "Gender", "Status"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(users);
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=Users_Data.csv");
    res.status(200).end(csvData);
  } catch (error) {
    console.log(error);
    res.send({ error: "Something went wrong" });
  }
});

module.exports = {
  userRouter,
};
