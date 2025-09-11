import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// const express = require("express");
const app = express();
const port = 8080;

dotenv.config();
console.log("Loaded environment variables:", process.env);
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI);

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Successfully connected to MongoDB!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello, Parks Board Game Server!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
