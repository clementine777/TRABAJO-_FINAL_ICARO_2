require("dotenv").config(); //llama dependencia dotenv
const express = require("express");
const app = express();
const path = require("path"); //llama funcio pth
app.set("view engine", "ejs"); // registra ejs
const port = process.env.PORT || 3000; //llama a la variable de entorno del PORT

//registra carpeta publica
app.use("/", express.static(path.join(__dirname, "../public")));

//app.get("/", (req, res) => res.send(path.join.(__dirname ));

app.listen(port, () => {
  console.log(`server running ok:${port}`); //concatena? el string con la variable port
});
