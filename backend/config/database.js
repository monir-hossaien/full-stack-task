import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let isConnected = false; // track connection

const connectDB = async () => {
    if (isConnected) {
        return; // reuse existing connection
    }

    if (!process.env.MONGODB_URI) {
        throw new Error("Please add MONGODB_URI to environment variables");
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI);
        isConnected = db.connections[0].readyState;
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        throw error;
    }
};

export default connectDB;
