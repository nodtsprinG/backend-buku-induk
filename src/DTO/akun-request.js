const { body, validationResult } = require("express-validator");

const akunRequest = [
  body("username").notEmpty().withMessage("Username tidak boleh kosong").isLength({ max: 255 }).withMessage("Username tidak boleh lebih dari 255 karakter"),
  
  body("password").notEmpty().withMessage("Password tidak boleh kosong").isLength({ max: 255 }).withMessage("Password tidak boleh lebih dari 255 karakter"),
    
  body("email").notEmpty().withMessage("Email tidak boleh kosong").isEmail().withMessage("Email harus dalam format yang benar"),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      return res.status(400).json({ message: errorMessages[0] });
    }
    next();
  },
];

module.exports = { akunRequest };
