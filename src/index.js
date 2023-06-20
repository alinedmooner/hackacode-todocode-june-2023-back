import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import customers from "../example_data/customers.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.get("/api/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/customers", (req, res) => {
  res.json(customers);
});

app.use("/api/employees", employeeRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
