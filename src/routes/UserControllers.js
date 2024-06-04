const { Router } = require("express");
const { Models } = require("../models");
const { dataDiriRequest } = require("../DTO/user-request");

const routes = Router();

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
  await Models.data_diri.create(dataDiri);

  hobi.user_id = req.user_id;
  await Models.hobi_siswa.create(hobi);

  ayahKandung.user_id = req.user_id;
  await Models.ayah_kandung.create(ayahKandung);

  ibuKandung.user_id = req.user_id;
  await Models.ibu_kandung.create(ibuKandung);

  kesehatan.user_id = req.user_id;
  await Models.kesehatan.create(kesehatan);

  pendidikan.user_id = req.user_id;
  await Models.pendidikan.create(pendidikan);

  perkembangan.user_id = req.user_id;
  await Models.perkembangan.create(perkembangan);

  setelahPendidikan.user_id = req.user_id;
  await Models.setelah_pendidikan.create(setelahPendidikan);

  tempatTinggal.user_id = req.user_id;
  await Models.tempat_tinggal.create(tempatTinggal);

  wali.user_id = req.user_id;
  await Models.wali.create(wali);

  res.status(201).json(req.body);
});

routes.get("/ayah-kandung", async (req, res) => {
  const data = await Models.ayah_kandung.findOne({
    where: {
      user_id: req.user_id,
    },
    attributes: {
      exclude: ["user_id"],
    },
  });
  res.json(data);
});

routes.get("/data-diri", async (req, res) => {
  const data = await Models.data_diri.findOne({
    where: {
      user_id: req.user_id,
    },
    attributes: {
      exclude: ["user_id"],
    },
  });
  res.json(data);
});

routes.get("/hobi", async (req, res) => {
  const data = await Models.hobi_siswa.findOne({
    where: {
      user_id: req.user_id,
    },
    attributes: {
      exclude: ["user_id"],
    },
  });
  res.json(data);
});

routes.get("/ibu-kandung", async (req, res) => {
  const data = await Models.ibu_kandung.findOne({
    where: {
      user_id: req.user_id,
    },
    attributes: {
      exclude: ["user_id"],
    },
  });
  res.json(data);
});

routes.get("/kesehatan", async (req, res) => {
  const data = await Models.kesehatan.findOne({
    where: {
      user_id: req.user_id,
    },
    attributes: {
      exclude: ["user_id"],
    },
  });
  res.json(data);
});

routes.get("/pendidikan", async (req, res) => {
  const data = await Models.pendidikan.findOne({
    where: {
      user_id: req.user_id,
    },
    attributes: {
      exclude: ["user_id"],
    },
  });
  res.json(data);
});

routes.get("/perkembangan", async (req, res) => {
  const data = await Models.perkembangan.findOne({
    where: {
      user_id: req.user_id,
    },
    attributes: {
      exclude: ["user_id"],
    },
  });
  res.json(data);
});

routes.get("/setelah-pendidikan", async (req, res) => {
  const data = await Models.setelah_pendidikan.findOne({
    where: {
      user_id: req.user_id,
    },
    attributes: {
      exclude: ["user_id"],
    },
  });
  res.json(data);
});

routes.get("/tempat-tinggal", async (req, res) => {
  const data = await Models.tempat_tinggal.findOne({
    where: {
      user_id: req.user_id,
    },
    attributes: {
      exclude: ["user_id"],
    },
  });
  res.json(data);
});

routes.get("/wali", async (req, res) => {
  const data = await Models.wali.findOne({
    where: {
      user_id: req.user_id,
    },
    attributes: {
      exclude: ["user_id"],
    },
  });
  res.json(data);
});

module.exports = routes;
