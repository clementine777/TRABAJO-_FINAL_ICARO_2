const express = require("express");
const { succesLogin } = require("../controllers/logInController");
const logIn = require("../controllers/logInController");
const validateForm = require("../middleware/validator/loginValidator");
const encryptPostForm = require("../middleware/loginEcryptPassword");
const router = express.Router();
const session = require("express-session");

router.get("/login", logIn.logInView);
router.post("/login", encryptPostForm, validateForm(), logIn.succesLogin);
router.get("/session", (req, res) => {
  return res.json(req.session);
});

module.exports = router;
