const express = require("express");

const router = express.Router();

const userController = require("../controllers/users.controller");

// GET api/users
router.get("/", userController.getAllUsers);

// GET api/users/:id
router.get("/:id", userController.getUserById);

module.exports = router;
