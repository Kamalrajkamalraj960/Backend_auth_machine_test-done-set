const { body } = require("express-validator");

exports.registerValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name is required"),

  body("email")
    .isEmail()
    .withMessage("Invalid email format"),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
];

exports.loginValidator = [
  body("email")
    .isEmail()
    .withMessage("Invalid email format"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
];
