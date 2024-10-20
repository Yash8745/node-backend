const bcrypt = require('bcryptjs');

// Create user function using email
async function createUser(usersCollection, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { email, password: hashedPassword }; // Store email instead of username
  await usersCollection.insertOne(user);
}

// Find user by email
async function findUser(usersCollection, username) {
  return await usersCollection.findOne({ username }); // Search by email
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
