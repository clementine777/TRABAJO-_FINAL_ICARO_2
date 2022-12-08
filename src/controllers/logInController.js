const logIn = {
  logInView: (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    res.render("logIn.ejs");
  },

  succesLogin: (req, res) => {
    const { firstname, lastname, email } = req.body;
    const userData = {
      firstname,
      lastname,
      email,
    };
    return res.render("successlogin.ejs", { userData: userData });
  },
};

module.exports = logIn;
