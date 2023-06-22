import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const port = process.env.PORT || 5273;

const app = express();

app.get("/api/", (req, res) => {
  res.send("Infinity Dream Park API");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
