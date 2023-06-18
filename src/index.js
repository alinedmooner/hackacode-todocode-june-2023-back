import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import customers from "../example_data/customers.js";
import employees from "../example_data/employees.js";

dotenv.config();

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/customers", (req, res) => {
  res.json(customers);
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
