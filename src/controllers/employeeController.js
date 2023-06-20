import asyncHandler from "../middlewares/asyncHandler.js";
import Employee from "../models/employeeModel.js";

const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({});
  res.json(employees);
});

export { getEmployees };
