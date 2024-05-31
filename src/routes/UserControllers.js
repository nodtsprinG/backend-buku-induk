const { Router } = require("express");
const { Models } = require("../models");
const { dataDiriRequest, waliRequest } = require("../DTO/user-request");

const routes = Router();

routes.get("/status", async (req, res) => {
  const data = await Models.keterangan_data_diri.findOne({
    where: {
      user_id: req.user_id,
    },
  });
  if (data == undefined) return res.status(400).json({ status: "belum mengisis data" });
  return res.json({ status: "telah mengisi" });
});

routes.post("/data-diri", dataDiriRequest, async (req, res) => {
  req.body.user_id = req.user_id;
  await Models.keterangan_data_diri.create(req.body.data_diri);

  req.body.user_id = null;
  res.json(req.body);
});

routes.get("/data-diri", async (req, res) => {
  const data = await Models.keterangan_data_diri.findOne({
    where: {
      user_id: req.user_id,
    },
    attributes: [
      "nama_lengkap",
      "nama_panggilan",
      "jenis_kelamin",
      "tempat_lahir",
      "tanggal_lahir",
      "agama",
      "kewarganegaraan",
      "anak_ke",
      "jml_saudara_kandung",
      "jml_saudara_tiri",
      "jml_saudara_angkat",
      "kelengkapan_ortu",
      "bahasa_sehari_hari",
      "nisn",
    ],
  });
  return res.json(data);
});

routes.post("/wali", waliRequest, async (req, res) => {
  req.body.user_id = req.user_id;
  await Models.keterangan_wali.create(req.body);

  req.body.user_id = null;
  return res.json(req.body);
});

routes.get("/wali", async (req, res) => {
  const data = await Models.keterangan_wali.findOne({
    where: {
      user_id: req.user_id,
    },
    attributes: ["nama", "tempat_lahir", "tanggal_lahir", "agama", "kewarganegaraan", "pendidikan", "pekerjaan", "pengeluaran_per_bulan", "alamat_dan_no_telepon"],
  });

  res.json(data);
});

module.exports = routes;
