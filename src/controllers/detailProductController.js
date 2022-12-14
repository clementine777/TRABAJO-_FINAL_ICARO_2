const Sequelize = require("sequelize");
const products = require("../models/products.js");

const detailPorduct = (req, res) => {
  res.render("detailProducts.ejs");
};

// const detailPorduct = (req, res) => {
//   products.findByPk(req.params.id).then((products) => {
//     req.product("home.ejs", { products });
//     res.render("detailProducts.ejs");
//   });

//   res.render("detailProducts.ejs", { product });
// };

// const detailProduct = (req, res) => {
//   products.findByPk(req.params.id).then((product) => {
//     products.forEach((product) => {
//       let productStr = product.price.toString();
//       let point = productStr.indexOf(".");
//       product.price = productStr.slice(0, point);
//     });

//     res.render("detailProducts.ejs", { product });
//   });
// };

module.exports = detailPorduct;
