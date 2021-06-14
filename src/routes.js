const express = require("express");

const userRoutes = require("../src/routes/user.routes");
const { sessionController } = require("../src/controllers");
const { sessionValidator } = require("../src/validations");
const router = express.Router();

router.use("/users", userRoutes);

// Sessions routes
router.post(
  "/signin",
  sessionValidator.signInValidator,
  sessionController.signInUser
);

module.exports = router;
