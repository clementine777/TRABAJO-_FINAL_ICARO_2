const Sequelize = require("sequelize");
const bcrypt = "bcrypt";
const Users = require("../models/users.js");

const signInView = (req, res) => {
  res.render("signIn.ejs");
};

// const signInView =async (req, res) => {
//   const {email, password}=req.body;
//   const user = await Users.findOne({where:( email) })
//     if(user){
//       const passwordIsValid = await bcrypt.Compare(password, user.password)
//     }if (passwordIsValid) {
//       req.session.user = user;
//       res.redirect('/home');

// };

module.exports = signInView;
