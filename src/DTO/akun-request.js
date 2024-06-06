const { body, validationResult } = require("express-validator");

const akunRequest = [
  body("nisn").notEmpty().withMessage("NISN tidak boleh kosong").isLength({ max: 255 }).withMessage("NISN must be at most 255 characters long").isString().withMessage("NISN must be a string"),
  body("nama").notEmpty().withMessage("Nama tidak boleh kosong"),
  body("tanggal_lahir").notEmpty().withMessage("Tanggal Lahir tidak boleh kosong").isISO8601().withMessage("Tanggal Lahir must be a valid date"),
  body("angkatan_id").isNumeric().notEmpty().withMessage("angkatan_id tidak boleh kosong"),
  body("jurusan_id").isNumeric().notEmpty().withMessage("jurusan_id tidak boleh kosong"),

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
