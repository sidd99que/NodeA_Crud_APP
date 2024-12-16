// utils/db.js
import { MongoClient } from 'mongodb';
import 'dotenv/config';

const uri = process.env.MONGODB_URI;  // MongoDB URI from environment variables
const client = new MongoClient(uri);

export const connectToMongoDB = async () => {
  try {
    await client.connect();
    console.log("MongoDB connection established!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;  // Throwing the error will stop the server startup if DB connection fails
  }
};

export default client;
