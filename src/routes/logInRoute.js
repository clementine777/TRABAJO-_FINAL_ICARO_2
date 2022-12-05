const express = require("express");
const { succesLogin } = require("../controllers/logInController");
const logIn = require("../controllers/logInController");
const validateForm = require("../middleware/validator/loginValidator");
const router = express.Router();


router.get("/login", logIn.logInView);
router.post("/login", validateForm(), logIn.succesLogin);

module.exports = router;
