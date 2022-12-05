
const logIn = {
  logInView: (req, res) => {
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
