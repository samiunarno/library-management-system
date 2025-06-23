import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI as string;

const serverStarts = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected by Mongoose");

    app.listen(PORT, () => {
      console.log("App listening on port", PORT);
    });
  } catch (error) {
    console.error("Failed to connect:", error);
  }
};

serverStarts();
