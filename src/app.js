require("dotenv").config(); //llama dependencia dotenv
const express = require("express");
const app = express();
const path = require("path"); //llama funcio pth
const port = process.env.PORT || 3000; //llama a la variable de entorno del PORT
app.set("view engine", "ejs"); // registra ejs

//usando rutas;
app.use(require("./routes/homeRoute"));
app.use(require("./routes/detailProductRoute"));
app.use(require("./routes/cartRoute"));
app.use(require("./routes/signInRoute"));
app.use(require("./routes/logInRoute"));

//archivo estatico
app.use("/", express.static(path.join(__dirname, "../public")));

//escuchar puerto del servidor
app.listen(port, () => {
  console.log(`server running ok:${port}`); //concatena? el string con la variable port
});
