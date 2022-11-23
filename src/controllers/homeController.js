const homeController = {
  mesage: (req, res) => {
    res.send("ruta y controlador home!!!!");
  },
  homeView: (req, res) => {
    res.render("index.ejs", { tittle: "titullo de ejs" });
  },
};

module.exports = homeController;
