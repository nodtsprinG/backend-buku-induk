const { body, validationResult, header } = require("express-validator");

const loginRequest = [
  body("username").notEmpty().withMessage("username is required"),
  body("password").notEmpty().withMessage("password is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      return res.status(400).json({ message: errorMessages[0] });
    }
    next();
  },
];

const loginSiswaRequest = [
  body("nisn").notEmpty().withMessage("NISN is required").isLength({ max: 255 }).withMessage("NISN must be at most 255 characters long").isString().withMessage("NISN must be a string"),
  body("tanggal_lahir").notEmpty().withMessage("Tanggal Lahir is required").isISO8601().withMessage("Tanggal Lahir must be a valid date"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      return res.status(400).json({ message: errorMessages[0] });
    }
    next();
  },
];

const getMeRequest = [
  header("Authorization").notEmpty().withMessage("Unauthorized"),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      return res.status(401).json({ message: errorMessages[0] });
    }

    try {
      const token = req.headers["authorization"].split(" ")[1];
      next();
    } catch (ex) {
      res.status(401).json({
        message: "Unauthorised",
      });
    }
  },
];

module.exports = { loginRequest, loginSiswaRequest, getMeRequest };
