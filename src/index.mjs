import express from "express";
import dotenv from "dotenv";
import customers from "../example_data/customers.mjs";
import employees from "../example_data/employees.mjs";

dotenv.config();

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
