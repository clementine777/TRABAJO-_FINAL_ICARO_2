require("dotenv").config(); //llama dependencia dotenv
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path"); //llama funcio pth
const port = process.env.PORT || 3000; //llama a la variable de entorno del PORT
//configuracion de express validattor
const { check, body, validationResult } = require("express-validator");
//usar body parser para tener la funcion body
app.use(bodyParser.urlencoded({ extended: true }));

//usar json e interactuar
app.use(express.json());

// notor de plantillas ejs
app.set("view engine", "ejs");

//app.set("views", __dirname + "/views");
app.set("views", path.join(__dirname, "/views")); //configura litio por defecto de las vista

//archivo estatico
app.use(express.static(path.join(__dirname, "../public/")));


//usando rutas;
app.use(require("./routes/homeRoute"));
app.use(require("./routes/detailProductRoute"));
app.use(require("./routes/cartRoute"));
app.use(require("./routes/signInRoute"));
app.use(require("./routes/logInRoute"));

//escuchar puerto del servidor
app.listen(port, () => {
  console.log(`server running ok:${port}`); //concatena? el string con la variable port
});
