const express = require("express");
const { connection } = require("./Configs/db");
const { userRouter } = require("./routes/user.routes");
require("dotenv").config();
const cors = require("cors");

/**
 * Entry point of the application.
 * Sets up the Express server, establishes a connection to the database,
 * and defines the routes.
 */

const app = express();

// Enable CORS for all routes
app.use(
  cors({
    origin: "*",
  })
);

// Parse JSON request bodies
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Welcome Home Page");
});

// User routes
app.use("/user", userRouter);

// Start the server and listen for incoming requests
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
  } catch (err) {
    console.log("Trouble connecting to the DB");
    console.log(err);
  }
  console.log(`Running at ${process.env.port} Port`);
});
