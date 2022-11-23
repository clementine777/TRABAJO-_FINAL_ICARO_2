const express = require("express");
const router = express.Router();
const signIn = require("../controllers/signInController");

router.get("/signIn", signIn.signInView);
router.post("/signIn", signIn.signInPost);

module.exports = router;
