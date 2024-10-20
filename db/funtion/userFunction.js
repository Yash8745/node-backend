const bcrypt = require('bcryptjs');

async function createUser(usersCollection, username, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { username, password: hashedPassword };
  await usersCollection.insertOne(user);
}

async function findUser(usersCollection, username) {
  return await usersCollection.findOne({ username });
}

async function comparePasswords(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

module.exports = {
  createUser,
  findUser,
  comparePasswords
};
