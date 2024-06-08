const { validationResult, check } = require("express-validator");

const validateAyahKandung = () => [
  check("ayah_kandung.nama").isString().notEmpty().withMessage("Nama harus diisi"),
  check("ayah_kandung.tempat_lahir").isString().notEmpty().withMessage("Tempat lahir harus diisi"),
  check("ayah_kandung.tanggal_lahir").isDate({ format: "YYYY-MM-DD" }).withMessage("Tanggal lahir harus diisi dengan format YYYY-MM-DD"),
  check("ayah_kandung.agama").isString().notEmpty().withMessage("Agama harus diisi"),
  check("ayah_kandung.kewarganegaraan").isString().notEmpty().withMessage("Kewarganegaraan harus diisi"),
  check("ayah_kandung.pendidikan").isString().notEmpty().withMessage("Pendidikan harus diisi"),
  check("ayah_kandung.pekerjaan").isString().notEmpty().withMessage("Pekerjaan harus diisi"),
  check("ayah_kandung.pengeluaran_per_bulan").isString().notEmpty().withMessage("Pengeluaran per bulan harus diisi"),
  check("ayah_kandung.alamat_dan_no_telepon").isString().notEmpty().withMessage("Alamat dan nomor telepon harus diisi"),
  check("ayah_kandung.status").isIn(["masih hidup", "meninggal"]).withMessage("Status harus diisi dengan salah satu dari masih hidup atau meninggal"),
];

const validateDataDiri = () => [
  check("data_diri.nama_lengkap").isString().notEmpty().withMessage("Nama lengkap harus diisi"),
  check("data_diri.nama_panggilan").isString().notEmpty().withMessage("Nama panggilan harus diisi"),
  check("data_diri.jenis_kelamin").isIn(["laki-laki", "perempuan"]).withMessage("Jenis kelamin harus diisi dengan laki-laki atau perempuan"),
  check("data_diri.tempat_lahir").isString().notEmpty().withMessage("Tempat lahir harus diisi"),
  check("data_diri.tanggal_lahir").isDate({ format: "YYYY-MM-DD" }).withMessage("Tanggal lahir harus diisi dengan format YYYY-MM-DD"),
  check("data_diri.agama").isString().notEmpty().withMessage("Agama harus diisi"),
  check("data_diri.kewarganegaraan").isString().notEmpty().withMessage("Kewarganegaraan harus diisi"),
  check("data_diri.anak_ke").isInt({ min: 1 }).withMessage("Anak ke harus diisi dan berupa angka positif"),
  check("data_diri.jml_saudara_kandung").optional().isInt({ min: 0 }).withMessage("Jumlah saudara kandung harus berupa angka positif atau nol"),
  check("data_diri.jml_saudara_tiri").optional().isInt({ min: 0 }).withMessage("Jumlah saudara tiri harus berupa angka positif atau nol"),
  check("data_diri.jml_saudara_angkat").optional().isInt({ min: 0 }).withMessage("Jumlah saudara angkat harus berupa angka positif atau nol"),
  check("data_diri.kelengkapan_ortu").isIn(["yatim", "piatu", "yatim piatu", "lengkap"]).withMessage("Kelengkapan orang tua harus diisi dengan salah satu dari yatim, piatu, yatim piatu, lengkap"),
  check("data_diri.bahasa_sehari_hari").isString().notEmpty().withMessage("Bahasa sehari-hari harus diisi"),
  check("data_diri.nisn").isString().notEmpty().withMessage("NISN harus diisi"),
];

const validateHobi = () => [
  check("hobi.kesenian").optional().isString().withMessage("Kesenian harus berupa string"),
  check("hobi.olahraga").optional().isString().withMessage("Olahraga harus berupa string"),
  check("hobi.organisasi").optional().isString().withMessage("Organisasi harus berupa string"),
  check("hobi.lain_lain").optional().isString().withMessage("Lain-lain harus berupa string"),
  check("hobi.gol_darah").optional().isIn(["A", "B", "O", "AB"]).withMessage("Golongan darah harus salah satu dari A, B, O, atau AB"),
  check("hobi.penyakit_pernah_diderita").optional().isString().withMessage("Penyakit pernah diderita harus berupa string"),
  check("hobi.kelainan_jasmani").optional().isString().withMessage("Kelainan jasmani harus berupa string"),
  check("hobi.tinggi").isString().notEmpty().withMessage("Tinggi harus diisi dan berupa string"),
  check("hobi.berat_badan").isString().notEmpty().withMessage("Berat badan harus diisi dan berupa string"),
];

const validateIbuKandung = () => [
  check("ibu_kandung.nama").isString().notEmpty().withMessage("Nama harus diisi"),
  check("ibu_kandung.tempat_lahir").isString().notEmpty().withMessage("Tempat lahir harus diisi"),
  check("ibu_kandung.tanggal_lahir").isDate({ format: "YYYY-MM-DD" }).withMessage("Tanggal lahir harus diisi dengan format YYYY-MM-DD"),
  check("ibu_kandung.agama").isString().notEmpty().withMessage("Agama harus diisi"),
  check("ibu_kandung.kewarganegaraan").isString().notEmpty().withMessage("Kewarganegaraan harus diisi"),
  check("ibu_kandung.pendidikan").isString().notEmpty().withMessage("Pendidikan harus diisi"),
  check("ibu_kandung.pekerjaan").isString().notEmpty().withMessage("Pekerjaan harus diisi"),
  check("ibu_kandung.pengeluaran_per_bulan").isString().notEmpty().withMessage("Pengeluaran per bulan harus diisi"),
  check("ibu_kandung.alamat_dan_no_telepon").isString().notEmpty().withMessage("Alamat dan nomor telepon harus diisi"),
  check("ibu_kandung.status").isIn(["masih hidup", "meninggal"]).withMessage("Status harus diisi dengan salah satu dari masih hidup atau meninggal"),
];

const validateKesehatan = () => [
  check("kesehatan.gol_darah").optional().isIn(["A", "B", "O", "AB"]).withMessage("Golongan darah harus salah satu dari A, B, O, atau AB"),
  check("kesehatan.penyakit_pernah_diderita").optional().isString().withMessage("Penyakit pernah diderita harus berupa string"),
  check("kesehatan.kelainan_jasmani").optional().isString().withMessage("Kelainan jasmani harus berupa string"),
  check("kesehatan.tinggi").isString().notEmpty().withMessage("Tinggi harus diisi dan berupa string"),
  check("kesehatan.berat_badan").isString().notEmpty().withMessage("Berat badan harus diisi dan berupa string"),
];

const validatePendidikan = () => [
  check("pendidikan.sebelumnya_tamatan_dari").isString().notEmpty().withMessage("Tamatan dari harus diisi"),
  check("pendidikan.sebelumnya_tanggal_dan_ijazah").isString().notEmpty().withMessage("Tanggal dan ijazah sebelumnya harus diisi"),
  check("pendidikan.sebelumnya_tanggal_skhun_dan_").isString().notEmpty().withMessage("Tanggal SKHUN sebelumnya harus diisi"),
  check("pendidikan.sebelumnya_lama_belajar").isString().notEmpty().withMessage("Lama belajar sebelumnya harus diisi"),
  check("pendidikan.pindahan_dari_sekolah").optional().isString().withMessage("Pindahan dari sekolah harus berupa string"),
  check("pendidikan.pindahan_alasan").optional().isString().withMessage("Alasan pindahan harus berupa string"),
  check("pendidikan.diterima_di_kelas").isInt({ min: 1 }).withMessage("Diterima di kelas harus diisi dan berupa angka positif"),
  check("pendidikan.diterima_di_bidang_keahlian").isString().notEmpty().withMessage("Bidang keahlian harus diisi"),
  check("pendidikan.diterima_di_program_keahlian").isString().notEmpty().withMessage("Program keahlian harus diisi"),
  check("pendidikan.diterima_di_paket_keahlian").isString().notEmpty().withMessage("Paket keahlian harus diisi"),
  check("pendidikan.diterima_tanggal").isDate({ format: "YYYY-MM-DD" }).withMessage("Tanggal diterima harus diisi dengan format YYYY-MM-DD"),
];

const validatePerkembangan = [
  check("menerima_bea_siswa_tahun_kelas_dari").optional().isString().withMessage("Menerima beasiswa tahun/kelas dari harus berupa string"),

  check("meninggalkan_sekolah_ini_tanggal").optional().isDate({ format: "YYYY-MM-DD" }).withMessage("Tanggal meninggalkan sekolah ini harus diisi dengan format YYYY-MM-DD"),

  check("meninggalkan_sekolah_ini_alasan").optional().isString().withMessage("Alasan meninggalkan sekolah ini harus berupa string"),

  check("akhir_pendidikan_tamat_belajar_lulus_tahun").optional().isString().withMessage("Tahun tamat belajar/lulus harus berupa string"),

  check("akhir_pendidikan_no_tanggal_ijazah").optional().isString().withMessage("Nomor dan tanggal ijazah harus berupa string"),

  check("akhir_pendidikan_no_tanggal_skhun").optional().isString().withMessage("Nomor dan tanggal SKHUN harus berupa string"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      return res.status(400).json({ message: errorMessages[0] });
    }
    next();
  },
];

const validateSetelahPendidikan = () => [
  check("setelah_pendidikan.melanjutkan_ke").optional().isString().withMessage("Melanjutkan ke harus berupa string"),
  check("setelah_pendidikan.bekerja_nama_perusahaan").optional().isString().withMessage("Nama perusahaan tempat bekerja harus berupa string"),
  check("setelah_pendidikan.bekerja_tanggal_mulai").optional().isDate({ format: "YYYY-MM-DD" }).withMessage("Tanggal mulai bekerja harus diisi dengan format YYYY-MM-DD"),
  check("setelah_pendidikan.bekerja_penghasilan").optional().isString().withMessage("Penghasilan harus berupa string"),
];

const validateTempatTinggal = () => [
  check("tempat_tinggal.alamat").isString().notEmpty().withMessage("Alamat harus diisi"),
  check("tempat_tinggal.no_telepon").isString().notEmpty().withMessage("Nomor telepon harus diisi"),
  check("tempat_tinggal.tinggal_dengan").isIn(["ortu", "saudara", "lainnya"]).withMessage("Tinggal dengan harus diisi dengan salah satu dari ortu, saudara, lainnya"),
  check("tempat_tinggal.jarak_ke_sekolah").optional().isString().withMessage("Jarak ke sekolah harus berupa string"),
];

const validateWali = () => [
  check("wali.nama").isString().notEmpty().withMessage("Nama wali harus diisi"),
  check("wali.tempat_lahir").isString().notEmpty().withMessage("Tempat lahir wali harus diisi"),
  check("wali.tanggal_lahir").isDate({ format: "YYYY-MM-DD" }).withMessage("Tanggal lahir wali harus diisi dengan format YYYY-MM-DD"),
  check("wali.agama").isString().notEmpty().withMessage("Agama wali harus diisi"),
  check("wali.kewarganegaraan").isString().notEmpty().withMessage("Kewarganegaraan wali harus diisi"),
  check("wali.pendidikan").isString().notEmpty().withMessage("Pendidikan wali harus diisi"),
  check("wali.pekerjaan").isString().notEmpty().withMessage("Pekerjaan wali harus diisi"),
  check("wali.pengeluaran_per_bulan").isString().notEmpty().withMessage("Pengeluaran per bulan wali harus diisi"),
  check("wali.alamat_dan_no_telepon").isString().notEmpty().withMessage("Alamat dan no telepon wali harus diisi"),
];

const dataDiriRequest = [
  ...validateDataDiri(),
  ...validateWali(),
  ...validateHobi(),
  ...validatePendidikan(),
  ...validateTempatTinggal(),
  ...validateKesehatan(),
  ...validateAyahKandung(),
  ...validateIbuKandung(),
  ...validatePendidikan(),
  ...validateSetelahPendidikan(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((err) => err.msg);
      return res.status(400).json({ message: errorMessages[0] });
    }
    next();
  },
];

module.exports = { dataDiriRequest, validatePerkembangan };
