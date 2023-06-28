import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "../db.js";
import Category from "../../models/categoryModel.js";
import categories from "../data/categories.js";

dotenv.config();

connectDB();

const seedCategories = async () => {
  try {
    await Category.deleteMany();
    
    await Category.insertMany(categories);

    console.log("Loaded categories.".green.inverse);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyCategories = async () => {
  try {
    await Category.deleteMany();
    
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyCategories();
}
else {
  seedCategories();
}


