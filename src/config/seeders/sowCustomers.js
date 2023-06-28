import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "../db.js";
import Customer from "../../models/customerModel.js";
import customers from "../data/customers.js";

dotenv.config();

connectDB();

const seedCustomers = async () => {
  try {
    await Customer.deleteMany();
    
    await Customer.insertMany(customers);

    console.log("Loaded customers.".green.inverse);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyCustomers = async () => {
  try {
    await Customer.deleteMany();
    
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyCustomers();
} else {
  seedCustomers();
}
