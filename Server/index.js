// index.js
import express from 'express';
import 'dotenv/config';
import { connectToMongoDB } from './utils/db.js';  // Importing the MongoDB connection function
import router from './routes/route.js';

const app = express();
const PORT = process.env.PORT || 5001

app.use(express.json());  // Middleware to parse incoming JSON requests

// Connect to MongoDB
connectToMongoDB()
  .then(() => {
    console.log("MongoDB connected successfully!");

    // Routes
    app.use('/api', router);

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error while starting the server:", error);
    process.exit(1);  // Exit the process if the DB connection fails
  });
