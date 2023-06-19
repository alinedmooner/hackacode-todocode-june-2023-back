import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import customers from "../../example_data/customers.js";
import employees from "../../example_data/employees.js";
import attractions from "../../example_data/attractions.js";
import tickets from "../../example_data/tickets.js";
import Customer from "../models/customerModel.js";
import Employee from "../models/employeeModel.js";
import Attraction from "../models/attractionModel.js";
import Ticket from "../models/ticketModel.js";
import connectDB from "./db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Customer.deleteMany();
    await Employee.deleteMany();
    await Attraction.deleteMany();
    await Ticket.deleteMany();

    const createdCustomers = await Customer.insertMany(customers);

    const firstCustomer = createdCustomers[0]._id;

    // eslint-disable-next-line arrow-body-style
    const sampleTickets = tickets.map((ticket) => {
      return { ...ticket, customer: firstCustomer };
    });

    await Ticket.insertMany(sampleTickets);

    const createdEmployees = await Employee.insertMany(employees);
    await Employee.insertMany(createdEmployees);

    const createdAttractions = await Attraction.insertMany(attractions);
    await Attraction.insertMany(createdAttractions);

    console.log("Data Imported!".green.inverse);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Customer.deleteMany();
    await Employee.deleteMany();
    await Attraction.deleteMany();
    await Ticket.deleteMany();

    console.log("Data Destroyed!".red.inverse);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
