const userService = require("../services/user.service");
const getAllUsers = async (req, res, next) => {
  userService
    .getAllUsers()
    .then((users) => res.json({ users }))
    .catch((err) => next(err));
};

const getUserById = async (req, res, next) => {
  userService
    .getUserById(req.params.id)
    .then((user) => res.json({ user }))
    .catch((err) => next(err));
};

const createUser = async (req, res, next) => {
  console.log(req.body);
  userService
    .createUser(req.body)
    .then((user) => res.json({ user }))
    .catch((err) => next(err));
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
