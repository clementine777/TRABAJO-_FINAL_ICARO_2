const express = require("express");
const signInView = require("../controllers/signInController");
const router = express.Router();

router.get("/signIn", signInView);

module.exports = router;
