const express = require('express');
const axios = require('axios');
const { createUser, findUser, comparePasswords } = require('../../db/function/userFunction');


const router = express.Router();

module.exports = (database) => {
  const usersCollection = database.collection('users');

  // Signup route
  router.post('/signup', async (req, res) => {
    const { username, email,password, uuid } = req.body;
    const normalizedUsername = username.toLowerCase(); 
    
    try {
      await createUser(usersCollection, normalizedUsername, password,email,uuid); 
      res.status(201).send("User registered successfully!");
    } catch (error) {
      console.error("Signup error:", error); // Log error for easier debugging
      res.status(500).send("Error registering user.");
    }
  });

 // Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log("Incoming username:", username);  
  
  const normalizedUsername = username.toLowerCase(); 
  try {
    const user = await findUser(usersCollection, normalizedUsername); 
    console.log("User found in DB:", user); 
    if (!user) {
      return res.status(401).send("User not found!"); 
    }

    const isMatch = await comparePasswords(password, user.password); // Compare password hashes
    if (!isMatch) {
      return res.status(401).send("Invalid password!"); // Respond if password is incorrect
    }
    try{
      const response = await axios.post('http://127.0.0.1:5000/user', user);
      console.log(response.data);
    }
    catch (err){
      console.error(err);
    }

    res.json({
      uuid: user.uuid,
      username: user.username,
      email: user.email
    }); 
  } catch (error) {
    console.error("Login error:", error); 
    res.status(500).send("Error during login."); 
  }
});


  return router;
};
