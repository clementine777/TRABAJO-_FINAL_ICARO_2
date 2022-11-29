// const express = require("express");
// const router = express.Router();
// const logIn = require("../controllers/logInController");

// router.get("/logIn", logIn.mesage);

// module.exports = router;

const express = require("express");
const logIn = require("../controllers/logInController");
const router = express.Router();

router.get("/logIn", logIn.logInView);
router.post("/logIn", logIn.logInPost);

module.exports = router;
