const bcrypt = require("bcrypt");

const encryptPostForm = (req, res, next) => {
  const { password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
  });
  next();
};

module.exports = encryptPostForm;
