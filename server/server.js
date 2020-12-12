import express from "express";
import path from "path";
import template from "./../template";
import { MongoClient } from "mongodb";
require("dotenv").config();

// Import devBundle.js for development
import devBundle from "./devBundle";

// Initialize the Express app
const app = express();

// Calling the compile method in devBundle
devBundle.compile(app);

// Serving static files from the dist folder
const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

// Rendering templates at the root
app.get("/", (req, res) => {
  res.status(200).send(template());
});

// Connecting server to MongodDB
const url = "mongodb://172.20.64.1:27017";
MongoClient.connect(
  url,
  {
    useUnifiedTopology: true,
  },
  (err, db) => {
    console.log("Connected to mongodb server");
    db.close();
  }
);

// Configure express to start server on port 3000
const port = process.env.PORT || 3000;
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info(`Server started on port: ${port}`);
});
