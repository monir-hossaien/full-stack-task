import mongoose from 'mongoose'
import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import { rateLimit } from 'express-rate-limit';
import dotenv from 'dotenv';
dotenv.config();

// import routes
import authRoutes from './routes/auth.routes.js';
import postRoutes from './routes/post.routes.js';
import commentRoutes from './routes/comment.routes.js';
import connectDB from "./config/database.js";

const app = express();

// Connect to DB on cold start
let dbConnected = false;
app.use(async (req, res, next) => {
    if (!dbConnected) {
        try {
            await connectDB();
            dbConnected = true;
        } catch (error) {
            console.error('DB connection failed:', error);
            return res.status(503).json({
                status: false,
                message: 'Database unavailable'
            });
        }
    }
    next();
});

// cors setup
const corsOptions = {
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    exposedHeaders: ['Set-Cookie'],
}
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 1000, // limit each IP to 1000 requests per windowMs
})

// Middleware
app.use(limiter)
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// set api routes
app.use("/api/v1", authRoutes);
app.use("/api/v1", postRoutes);
app.use("/api/v1", commentRoutes);


// Health check endpoint
app.get('/api/v1/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
  res.json({ 
    status: true,
    timestamp: new Date().toISOString(),
    database: dbStatus
  });
});

// initial route
app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: "Welcome to the backend server"
    })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});



export default app;