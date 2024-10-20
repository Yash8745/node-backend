const express = require('express');
const { createUser, findUser, comparePasswords } = require('../../db/function/userFunction');
const router = express.Router();

module.exports = (database) => {
  const usersCollection = database.collection('users');

  // Signup route
  router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const normalizedUsername = username.toLowerCase(); // Normalize the username for consistent storage
    
    try {
      await createUser(usersCollection, normalizedUsername, password); // Create user with normalized username
      res.status(201).send("User registered successfully!");
    } catch (error) {
      console.error("Signup error:", error); // Log error for easier debugging
      res.status(500).send("Error registering user.");
    }
  });

 // Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log("Incoming username:", username);  // Logs the incoming email for debugging
  
  const normalizedUsername = username.toLowerCase(); // Normalize username
  try {
    const user = await findUser(usersCollection, normalizedUsername); // Search for the user in the database
    console.log("User found in DB:", user); // Logs the user found in the database
    if (!user) {
      return res.status(401).send("User not found!"); // Respond if user not found
    }

    const isMatch = await comparePasswords(password, user.password); // Compare password hashes
    if (!isMatch) {
      return res.status(401).send("Invalid password!"); // Respond if password is incorrect
    }

    res.send("Login successful!"); // Respond with success message
  } catch (error) {
    console.error("Login error:", error); // Log error for debugging
    res.status(500).send("Error during login."); // Respond with error message
  }
});



  return router;
};
