import express from "express";
import customers from "../example_data/customers.mjs";
import employees from "../example_data/employees.mjs";

const port = 5273;

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
