const Sequelize = require("sequelize");
const products = require("../models/products.js");

const homeView = (req, res) => {
  products.findAll().then((products) => {
    products.forEach((product) => {
      console.log(product.id_product);
      let productStr = product.price.toString();
      let point = productStr.indexOf(".");
      product.price = productStr.slice(0, point);
    });
    res.render("home.ejs", { tittle: "titullo de ejs", products });
    //elima fraccion decimal
  });
};
//let punto = price.indexOf(".");
//crea el producto desde la base
// const productView = (req, res) => {
//   products.findByPk(req.params.id).then((product) => {
//     res.render("products.ejs", { product });
//   });
// };

module.exports = { homeView };
