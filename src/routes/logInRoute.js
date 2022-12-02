const express = require("express");
const { succesLogin } = require("../controllers/logInController");
const logIn = require("../controllers/logInController");
const router = express.Router();

router.get("/login", logIn.logInView);
router.post("/login", logIn.logInPost, succesLogin);

module.exports = router;
