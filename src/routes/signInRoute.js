const express = require("express");
const router = express.Router();
const signIn = require("../controllers/signInController");

router.get("/signIn", signIn.signInView);

module.exports = router;
