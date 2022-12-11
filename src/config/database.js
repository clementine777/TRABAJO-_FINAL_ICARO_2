const Sequelize = require("sequelize");
const config = require("./configDataBase.json");
const db = {};

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("---CONECTION TO DATABASE---");
  })
  .catch((err) => {
    console.error("---ERROR CONECTION DATABASE---", err);
  });

module.exports = db.sequelize;
