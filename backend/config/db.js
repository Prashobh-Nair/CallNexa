const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn('⚠️ WARNING: MONGODB_URI is not defined in environment variables.');
    console.warn('The server will start, but lookups and reports will run in in-memory simulation mode (data will not persist).');
    return false;
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`🔌 MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.warn('The server will fall back to in-memory simulation mode.');
    return false;
  }
};

module.exports = connectDB;
