const express = require("express");
const homeView = require("../controllers/homeController");
const router = express.Router();

router.get("/home", homeView);
router.get('/', homeView)
// router.post();
// router.delete();
// router.put();

// console.log(homeRoute);

module.exports = router;
