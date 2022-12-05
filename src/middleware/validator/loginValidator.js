
const { body, validationResult } = require('express-validator');

const validateForm = () => {
    return [
        body("firstname", 'debe tener almenos 3 caracteres').exists().isLength({ min: 3 }).trim().escape(),
        body("lastname").exists().isLength({ min: 3 }).trim().escape(),
        body("email").exists().isEmail().trim().escape().normalizeEmail(),
        body("repeat_email")
            .exists()
            .isEmail()
            .trim()
            .escape()
            .normalizeEmail()
            .custom((value, { req }) => {
                if (value !== req.body.email) {
                    throw new Error('Password confirmation does not match password');
                } return true
            }),
        body("password").exists().isLength({ min: 6 }).trim().escape(),
        body("repeat_password")
            .exists()
            .isLength({ min: 6 })
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('Password confirmation does not match password');
                } return true
            })
            .trim()
            .escape(),
        //modlo de la funcion que devuelve el error
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next()
        }
    ]
}

module.exports = validateForm