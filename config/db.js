const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  mongoose.set('strictQuery', false);
  try {
    await mongoose.connect(db);

    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error.message);
    // Exit Process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
