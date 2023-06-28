import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "../db.js";
import Employee from "../../models/employeeModel.js";
import employees from "../data/employees.js";

dotenv.config();

connectDB();

const seedEmployees = async () => {
  try {
    await Employee.deleteMany();
    
    await Employee.insertMany(employees);

    console.log("Loaded employees.".green.inverse);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyEmployees = async () => {
  try {
    await Employee.deleteMany();
    
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyEmployees();
} else {
  seedEmployees();
}
