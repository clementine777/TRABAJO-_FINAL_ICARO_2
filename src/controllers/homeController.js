const homeView = (req, res) => {
  res.render("home.ejs", { tittle: "titullo de ejs" });
};

module.exports = homeView;
