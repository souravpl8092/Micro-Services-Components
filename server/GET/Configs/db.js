const mongoose = require("mongoose");
require("dotenv").config();

/**
 * Establishes a connection to the MongoDB database using the provided URL.
 * The URL is fetched from the environment variable "mongoURL" defined in the .env file.
 */

const connection = mongoose.connect(process.env.mongoURL);

module.exports = { connection };
