const express = require("express");
const home = require("../controllers/homeController.js");
const router = express.Router();

router.get("/home", home.homeView);
//router.get("/product/:id", home.productView);
router.get("/", home.homeView);
// router.post();
// router.delete();
// router.put();

// console.log(homeRoute);

module.exports = router;
