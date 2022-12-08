const { name } = require("ejs");
const { Sequelize, DataTypes } = require("sequelize");

const userModel = Sequelize.define("users", {
  id_user: {
    DataTypes: DataTypes.INTEGER,
    PRIMARYKEY: true,
    autoincrement: true,
  },
  user_name: DataTypes.STRING,
  user_lastname: DataTypes.STRING,
  email: DataTypes.STRING,
  user_password: DataTypes.STRING,
});

const newUser = await userModel.create({
  user_name: firstname,
  user_lastname: lastname,
  email: email,
  user_password: password,
});

module.exports = userModel;
