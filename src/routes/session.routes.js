const express = require("express");

const router = express.Router();

const { sessionController } = require("../controllers");

router.post("/login", sessionController);
