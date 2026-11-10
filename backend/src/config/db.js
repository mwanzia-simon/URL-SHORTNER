import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURI);
    console.log("Database connected succesifully!");
  } catch (error) {
    console.log("An error occured while trying to connect to mongodb!");
  }
};

