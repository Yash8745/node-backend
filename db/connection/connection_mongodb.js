const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db('memopin'); // Replace with your database name
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Rethrow to handle it in the main file
  }
}

module.exports = { connectToDatabase };
