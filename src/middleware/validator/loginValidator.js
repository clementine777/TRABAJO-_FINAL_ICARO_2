
const { body, validationResult } = require('express-validator');
const validateForm = () => {
    return [
        body("firstname", 'debe tener almenos 3 caracteres').exists().trim().escape().isLength({ min: 3 }),
        body("lastname").exists().trim().escape().isLength({ min: 3 }),
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



        body("password").exists().trim().escape().isLength({ min: 6 }),
        body("repeat_password")
            .exists()
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('Password confirmation does not match password');
                } return true
            })
            .trim()
            .escape()
            .isLength({ min: 6 }),


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