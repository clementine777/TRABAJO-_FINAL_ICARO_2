const logIn = {
  logInView: (req, res) => {
    res.render("logIn.ejs", { tittleform: "Complete the form and join Us!" });
  },

  logInPost: (req, res, next) => {
    console.log(req.body);
    next();
  },

  succesLogin: (req, res) => {
    const { firstname, lastname, email } = req.body;
    const userData = {
      firstname,
      lastname,
      email,
    };
    //console.log(userData);
    return res.render("successlogin.ejs", { userData: userData });
  },
};

module.exports = logIn;
