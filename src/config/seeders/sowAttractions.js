import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "../db.js";
import Attraction from "../../models/attractionModel.js";
import attractions from "../data/attractions.js";

dotenv.config();

connectDB();

const seedAttractions = async () => {
  try {
    await Attraction.deleteMany();
    
    await Attraction.insertMany(attractions);

    console.log("Loaded attractions.".green.inverse);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyAttractions = async () => {
  try {
    await Attraction.deleteMany();
    
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyAttractions();
} else {
  seedAttractions();
} 
