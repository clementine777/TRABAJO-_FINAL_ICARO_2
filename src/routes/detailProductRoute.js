const express = require("express");
const router = express.Router();
const detailPorduct = require("../controllers/detailProductController");

router.get("/detailProduct", detailPorduct.mesage);

module.exports = router;
