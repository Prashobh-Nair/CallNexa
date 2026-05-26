const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: '*', // For development, allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'apikey']
}));
app.use(express.json());

// API Routes
app.use('/api', apiRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the CallNexa Spam & Caller Intelligence API Server',
    status: 'healthy',
    mode: process.env.MONGODB_URI ? 'database' : 'simulation'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(`💥 Unhandled Error: ${err.message}`);
  res.status(500).json({ success: false, error: 'Internal Server Error.' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 CallNexa API server running on port ${PORT}`);
});
