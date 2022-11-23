const signIn = {
  signInView: (req, res) => {
    res.render("signIn", { tittleform: "Complete the form and join Us!" });
  },

  signInPost: (req, res) => {
    console.log(req.body);
  },
};

module.exports = signIn;
