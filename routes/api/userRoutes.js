const express = require('express');
const { createUser, findUser, comparePasswords } = require('../function/userFunctions');
const router = express.Router();

module.exports = (database) => {
  const usersCollection = database.collection('users');

  // Signup route
  router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
      await createUser(usersCollection, username, password);
      res.status(201).send("User registered successfully!");
    } catch (error) {
      res.status(500).send("Error registering user.");
    }
  });

  // Login route
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await findUser(usersCollection, username);
      if (!user) {
        return res.status(401).send("User not found!");
      }

      const isMatch = await comparePasswords(password, user.password);
      if (!isMatch) {
        return res.status(401).send("Invalid password!");
      }

      res.send("Login successful!");
    } catch (error) {
      res.status(500).send("Error during login.");
    }
  });

  return router;
};
