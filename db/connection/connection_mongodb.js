const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();  // Ensure you're loading environment variables

// Use the MongoDB URI from the .env file or hardcode it directly here
const uri = process.env.MONGODB_URI;
// Create a MongoClient with MongoClientOptions to set the API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1, // Use MongoDB Server API version 1
    strict: true, // Optional: Enables strict mode
    deprecationErrors: true, // Optional: Warns on deprecated methods
  }
});

// Function to connect and return the database instance
async function connectToDatabase() {
  try {
    // Connect the client to the MongoDB server
    await client.connect();

    // Ping the MongoDB server to confirm the connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Return the database instance for further usage
    return client.db('memopin');  // Replace 'memopin' with your actual database name if needed

  } catch (error) {
    // Log connection errors
    console.error("Error connecting to MongoDB:", error);
    throw error;  // Rethrow the error to be handled elsewhere
  }
}

// Export the connectToDatabase function
module.exports = { connectToDatabase };
