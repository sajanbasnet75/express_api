const { userService } = require("../services");
const { userValidator } = require("../validations");
const User = require("../models/user");

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
  const { error } = userValidator.userCreateValidator(req.body);
  if (error) return res.status(422).send(error.details[0].message);

  userService
    .getUserByEmail(req.body.email)
    .then((user) => res.status(422).send("Email already taken"))
    .catch((err) => next(err));

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
