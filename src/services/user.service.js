const User = require("../models/user");

const getAllUsers = () => {
  return User.fetchAll();
};

const getUserById = (id) => {
  return new User({ id })
    .fetch()
    .then((user) => user)
    .catch((err) => err);
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
  createUser,
};
