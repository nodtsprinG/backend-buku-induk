const { body, validationResult } = require("express-validator");

const dataDiriRequest = [
  body("nama_lengkap").notEmpty().withMessage("Nama lengkap tidak boleh kosong").isLength({ max: 255 }).withMessage("Nama lengkap tidak boleh lebih dari 255 karakter"),

  body("nama_panggilan").notEmpty().withMessage("Nama panggilan tidak boleh kosong").isLength({ max: 255 }).withMessage("Nama panggilan tidak boleh lebih dari 255 karakter"),

  body("jenis_kelamin").notEmpty().withMessage("Jenis kelamin tidak boleh kosong").isIn(["laki-laki", "perempuan"]).withMessage("Jenis kelamin harus salah satu dari: laki-laki, perempuan"),

  body("tempat_lahir").notEmpty().withMessage("Tempat lahir tidak boleh kosong").isLength({ max: 255 }).withMessage("Tempat lahir tidak boleh lebih dari 255 karakter"),

  body("tanggal_lahir").notEmpty().withMessage("Tanggal lahir tidak boleh kosong").isDate().withMessage("Tanggal lahir harus dalam format tanggal yang benar"),

  body("agama").notEmpty().withMessage("Agama tidak boleh kosong").isLength({ max: 255 }).withMessage("Agama tidak boleh lebih dari 255 karakter"),

  body("kewarganegaraan").notEmpty().withMessage("Kewarganegaraan tidak boleh kosong").isLength({ max: 255 }).withMessage("Kewarganegaraan tidak boleh lebih dari 255 karakter"),

  body("anak_ke").notEmpty().withMessage("Anak ke tidak boleh kosong").isInt().withMessage("Anak ke harus berupa angka integer"),

  body("jml_saudara_kandung").optional().isInt().withMessage("Jumlah saudara kandung harus berupa angka integer"),

  body("jml_saudara_tiri").optional().isInt().withMessage("Jumlah saudara tiri harus berupa angka integer"),

  body("jml_saudara_angkat").optional().isInt().withMessage("Jumlah saudara angkat harus berupa angka integer"),

  body("kelengkapan_ortu").notEmpty().withMessage("Kelengkapan orang tua tidak boleh kosong").isIn(["yatim", "piatu", "yatim piatu", "lengkap"]).withMessage("Kelengkapan orang tua harus salah satu dari: yatim, piatu, yatim piatu, lengkap"),

  body("bahasa_sehari_hari").notEmpty().withMessage("Bahasa sehari-hari tidak boleh kosong").isLength({ max: 255 }).withMessage("Bahasa sehari-hari tidak boleh lebih dari 255 karakter"),

  body("nisn").notEmpty().withMessage("NISN tidak boleh kosong").isLength({ max: 255 }).withMessage("NISN tidak boleh lebih dari 255 karakter"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      return res.status(400).json({ message: errorMessages[0] });
    }
    next();
  },
];

const waliRequest = [
  body("nama").notEmpty().withMessage("Nama tidak boleh kosong").isLength({ max: 255 }).withMessage("Nama tidak boleh lebih dari 255 karakter"),

  body("tempat_lahir").notEmpty().withMessage("Tempat lahir tidak boleh kosong").isLength({ max: 255 }).withMessage("Tempat lahir tidak boleh lebih dari 255 karakter"),

  body("tanggal_lahir").notEmpty().withMessage("Tanggal lahir tidak boleh kosong").isDate().withMessage("Tanggal lahir harus dalam format tanggal yang benar"),

  body("agama").notEmpty().withMessage("Agama tidak boleh kosong").isLength({ max: 255 }).withMessage("Agama tidak boleh lebih dari 255 karakter"),

  body("kewarganegaraan").notEmpty().withMessage("Kewarganegaraan tidak boleh kosong").isLength({ max: 255 }).withMessage("Kewarganegaraan tidak boleh lebih dari 255 karakter"),

  body("pendidikan").notEmpty().withMessage("Pendidikan tidak boleh kosong").isLength({ max: 255 }).withMessage("Pendidikan tidak boleh lebih dari 255 karakter"),

  body("pekerjaan").notEmpty().withMessage("Pekerjaan tidak boleh kosong").isLength({ max: 255 }).withMessage("Pekerjaan tidak boleh lebih dari 255 karakter"),

  body("pengeluaran_per_bulan").notEmpty().withMessage("Pengeluaran per bulan tidak boleh kosong").isLength({ max: 255 }).withMessage("Pengeluaran per bulan tidak boleh lebih dari 255 karakter"),

  body("alamat_dan_no_telepon").notEmpty().withMessage("Alamat dan nomor telepon tidak boleh kosong").isLength({ max: 255 }).withMessage("Alamat dan nomor telepon tidak boleh lebih dari 255 karakter"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      return res.status(400).json({ message: errorMessages[0] });
    }
    next();
  },
];

module.exports = { dataDiriRequest, waliRequest };
