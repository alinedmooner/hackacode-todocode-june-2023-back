import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Employee from "../models/employeeModel.js";

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
  const employees = await Employee.find({});
  res.json(employees);
}));

export default router;
