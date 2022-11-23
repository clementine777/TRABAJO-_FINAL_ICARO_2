const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/home", homeController.homeView);
// router.post();
// router.delete();
// router.put();

// console.log(homeRoute);

module.exports = router;
