const bcrypt = require('bcryptjs');

// Create user function using email
async function createUser(usersCollection, username, password,email,uuid) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { username, password: hashedPassword ,email , uuid,}; // store username
  await usersCollection.insertOne(user);
}

// Find user by email
async function findUser(usersCollection, username) {
  return await usersCollection.findOne({ username }); // Search by username
}

// Compare passwords
async function comparePasswords(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

module.exports = {
  createUser,
  findUser,
  comparePasswords
};
