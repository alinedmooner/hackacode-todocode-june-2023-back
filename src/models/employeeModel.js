import mongoose from "mongoose";


const employeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdministrator: {
      type: Boolean,
      required: true,
      default: false,
    },
    attractions: [String],
    categories: [String],
    image: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;

