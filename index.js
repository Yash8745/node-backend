const express = require('express');
const { connectToDatabase } = require('./db/connection/connection_mongodb');
const userRoutes = require('./route/api/userRoutes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

async function startServer() {
  try {
    const database = await connectToDatabase();
    app.use('/api', userRoutes(database)); // Use user routes

    // Start the server
    app.listen(3001, () => {
      console.log("Server running on port 3001");
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
}

startServer();
