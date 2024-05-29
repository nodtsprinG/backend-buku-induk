const { body, validationResult, header } = require("express-validator");
const { Models } = require("../models");

const loginRequest = [
  body("email").notEmpty().withMessage("email is required"),
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

const generateTokenRequest = [
  body("code").notEmpty().withMessage("password is required"),
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

    const token = req.headers["authorization"].split(" ")[1];
    const data = await Models.user.findOne({
      where: {
        token,
      },
    });
    if (data == undefined) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    req.user_id = data.id;
    next();
  },
];

module.exports = { loginRequest, generateTokenRequest, getMeRequest };
