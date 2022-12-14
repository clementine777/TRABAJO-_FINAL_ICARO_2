const express = require("express");
const router = express.Router();
const detailPorduct = require("../controllers/detailProductController");

router.get("/home%detailProduct", detailPorduct);

module.exports = router;
