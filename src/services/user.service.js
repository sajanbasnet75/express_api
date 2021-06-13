const User = require("../models/user");

const getAllUsers = () => {
  return User.fetchAll();
};

const getUserById = async (id) => {
  try {
    const user = await new User({ id }).fetch();
    return user;
  } catch (err) {
    console.log("there was an error");
    return err;
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await new User({ email }).fetch();
    return user;
  } catch (err) {
    return err;
  }
};

const createUser = (user) => {
  console.log(user);
  return new User({
    first_name: user.first_name,
    email: user.email,
    password: user.password,
    last_name: user.last_name,
  }).save();
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
};
