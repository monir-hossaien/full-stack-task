import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Cache connection across serverless invocations
let cachedConnection = null;

const connectDB = async () => {
    // Set strictQuery option
    mongoose.set('strictQuery', true);

    // Return cached connection if available and connected
    if (cachedConnection && mongoose.connection.readyState === 1) {
        console.log("Using cached MongoDB connection");
        return cachedConnection;
    }

    if (!process.env.MONGODB_URI) {
        throw new Error("Please add MONGODB_URI to environment variables");
    }

    try {
        // Serverless-optimized settings
        mongoose.set('bufferCommands', false); // Disable buffering in serverless
        mongoose.set('bufferTimeoutMS', 10000);

        const db = await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000, // Quick timeout for serverless
            socketTimeoutMS: 10000, // Shorter socket timeout
            maxPoolSize: 1, // Single connection for serverless
            minPoolSize: 1,
            maxIdleTimeMS: 10000, // Close idle connections quickly
        });

        cachedConnection = db;
        console.log("MongoDB connected successfully (Vercel)");
        console.log(`Database: ${db.connections[0].name}`);

        return cachedConnection;

    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        cachedConnection = null;
        throw error;
    }
};

export default connectDB;