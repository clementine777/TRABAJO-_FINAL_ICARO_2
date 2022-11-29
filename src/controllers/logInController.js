// const logIn = {
//   mesage: (req, res) => {
//     res.send("ruta log in");
//   },
// };

// module.exports = logIn;

const logIn = {
  logInView: (req, res) => {
    res.render("logIn", { tittleform: "Complete the form and join Us!" });
  },

  logInPost: (req, res) => {
    console.log(req.body);
  },
};

module.exports = logIn;
