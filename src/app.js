require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("el back end esta vivo"));

app.listen(port, () => {
  console.log(`server running ok:${port}`);
});
