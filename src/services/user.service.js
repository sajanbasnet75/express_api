const User = require("../models/user");
const bcrypt = require("bcryptjs");

const getAllUsers = () => {
  return User.fetchAll();
};

const getUserById = async (id) => {
  try {
    const user = await new User({ id }).fetch();
    return user;
  } catch (err) {
    return err;
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await new User({ email }).fetch();
    return user;
  } catch (err) {
    return null;
  }
};

const createUser = async (user) => {
  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(user.password, salt);

  return new User({
    first_name: user.first_name,
    email: user.email,
    password: hashPassword,
    last_name: user.last_name,
  }).save();
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
};
