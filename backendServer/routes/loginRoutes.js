const express = require("express");
const router = express.Router();
const { loginUser, getUserRole } = require("../controller/loginController");

// 🗝️ Login: Authenticate user
router.post("/auth/login", loginUser);

// 🧑‍🏫 Get user role based on userId
router.get("/auth/role/:userId", getUserRole);

module.exports = router;
