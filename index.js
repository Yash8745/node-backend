const express = require('express');
const cors = require('cors'); // Import the cors module
const { connectToDatabase } = require('./db/connection/connection_mongodb');
const userRoutes = require('./routes/api/userRoutes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all origins
app.use(cors()); // Add this line to enable CORS

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
