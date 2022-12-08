require("dotenv").config(); //llama dependencia dotenv
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path"); //llama funcio pth
const port = process.env.PORT || 3000; //llama a la variable de entorno del PORT
const morgan = require("morgan");
const session = require("express-session");
const sessionConfig = require("./config/sessionConfig");
const cookie = require("cookie-parser");
//const bcrypt = require("bcrypt");
const sequelizeConfig = require("./config/dataBaseConfig"); //configuracion de la base de datos

//usar body parser para tener la funcion body
app.use(bodyParser.urlencoded({ extended: true }));
//usa morgan para logear las peticion http
app.use(morgan("dev"));
//maneja las cookies
app.use(cookie());
//importa archvio de configuracion de express-session
app.use(sessionConfig);
//usar json e interactuar
app.use(express.json());
// notor de plantillas ejs

app.set("view engine", "ejs");
//configura litio por defecto de las vista
app.set("views", path.join(__dirname, "/views"));
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
  console.log(`------SERVER RUNNING OK AT PORT:${port}-------`); //concatena? el string con la variable port
});
