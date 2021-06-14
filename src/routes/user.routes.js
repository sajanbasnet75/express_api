const express = require("express");

const router = express.Router();

const { userController } = require("../controllers");
const { userValidator } = require("../validations");

// GET api/users
router.get("/", userController.getAllUsers);

// GET api/users/:id
router.get("/:id", userController.getUserById);

// POST api/users/
router.post(
  "/signup",
  userValidator.checkExistingUser,
  userValidator.userCreateValidator,
  userController.createUser
);

module.exports = router;
