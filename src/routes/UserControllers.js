const { Router } = require("express");
const { Models } = require("../models");
const { dataDiriRequest } = require("../DTO/user-request");

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
  const dataDiri = req.body.data_diri;
  const hobi = req.body.hobi;
  const ayahKandung = req.body.ayah_kandung;
  const ibuKandung = req.body.ibu_kandung;
  const kesehatan = req.body.kesehatan;
  const pendidikan = req.body.pendidikan;
  const perkembangan = req.body.perkembangan;
  const setelahPendidikan = req.body.setelah_pendidikan;
  const tempatTinggal = req.body.tempat_tinggal;
  const wali = req.body.wali;

  dataDiri.user_id = req.user_id;
  await Models.keterangan_data_diri.create(dataDiri);

  hobi.user_id = req.user_id;
  await Models.keterangan_hobi_siswa.create(hobi);

  ayahKandung.user_id = req.user_id;
  await Models.keterangan_ayah_kandung.create(ayahKandung);

  ibuKandung.user_id = req.user_id;
  await Models.keterangan_ibu_kandung.create(ibuKandung);

  kesehatan.user_id = req.user_id;
  await Models.keterangan_kesehatan.create(kesehatan);

  pendidikan.user_id = req.user_id;
  await Models.keterangan_pendidikan.create(pendidikan);

  perkembangan.user_id = req.user_id;
  await Models.keterangan_perkembangan.create(perkembangan);

  setelahPendidikan.user_id = req.user_id;
  await Models.keterangan_setelah_pendidikan.create(setelahPendidikan);

  tempatTinggal.user_id = req.user_id;
  await Models.keterangan_tempat_tinggal.create(tempatTinggal);

  wali.user_id = req.user_id;
  await Models.keterangan_wali.create(wali);

  res.status(201).json(req.body);
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

module.exports = routes;
