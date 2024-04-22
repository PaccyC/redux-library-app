const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const connectToDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to database');
    return db;
  } catch (error) {
    console.error('Failed to connect to database:', error);
    process.exit(1);
  }
};

module.exports = connectToDb;
