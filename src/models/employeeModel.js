import mongoose from "mongoose";
import Attraction from "./attractionModel";

const employeeSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    isAdministrator: {
      type: Boolean,
      required: true,
      default: false,
    },
    attractions: [Attraction],
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;

