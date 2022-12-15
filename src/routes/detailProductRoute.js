const express = require("express");
const router = express.Router();
const detailProduct = require("../controllers/detailProductController");

router.get("/detailProduct/:id", detailProduct);

module.exports = router;
