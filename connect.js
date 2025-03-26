// const mongoose = require("mongoose");
// mongoose.set("strictQuery", true);
// async function connectToMongoDB(url) {
//   return mongoose.connect(url);
// }

// module.exports = {
//   connectToMongoDB,
// };
import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const url = "mongodb+srv://raracan895:ENThtiscY0dSadH1@cluster0.gzvsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export async function connectToMongoDB() {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
}
