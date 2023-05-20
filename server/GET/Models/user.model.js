const mongoose = require("mongoose");

/**
 * Defines the schema for the "User" collection in MongoDB.
 * The schema specifies the fields and their types for each user document.
 */

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    gender: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

/**
 * Represents the User model in the MongoDB database.
 * The model is based on the defined userSchema and provides methods for interacting with the "User" collection.
 */

const userModel = mongoose.model("user", userSchema);

module.exports = {
  userModel,
};
