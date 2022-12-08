//define conexiones de la base de datos
const sequelize = require("sequelize");
const sequelizeConfig = new sequelize("star_factory_jewerly", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

sequelizeConfig
  .authenticate()
  .then(() => {
    console.log("---CONECTION TO DATABASE---");
  })
  .catch((err) => {
    console.error("---ERROR CONECTION DATABASE---", err);
  });

module.exports = sequelizeConfig;
