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

routes.get("/data", async (req, res) => {
  const data = {
    ayah_kandung: await Models.keterangan_ayah_kandung.findOne({
      where: {
        user_id: req.user_id,
      },
      attributes: {
        exclude: ["user_id"],
      },
    }),
    ibu_kandung: await Models.keterangan_ibu_kandung.findOne({
      where: {
        user_id: req.user_id,
      },
      attributes: {
        exclude: ["user_id"],
      },
    }),
    data_diri: await Models.keterangan_data_diri.findOne({
      where: {
        user_id: req.user_id,
      },
      attributes: {
        exclude: ["user_id"],
      },
    }),
    hobi: await Models.keterangan_hobi_siswa.findOne({
      where: {
        user_id: req.user_id,
      },
      attributes: {
        exclude: ["user_id"],
      },
    }),
    kesehatan: await Models.keterangan_kesehatan.findOne({
      where: {
        user_id: req.user_id,
      },
      attributes: {
        exclude: ["user_id"],
      },
    }),
    pendidikan: await Models.keterangan_pendidikan.findOne({
      where: {
        user_id: req.user_id,
      },
      attributes: {
        exclude: ["user_id"],
      },
    }),
    perkembangan: await Models.keterangan_perkembangan.findOne({
      where: {
        user_id: req.user_id,
      },
      attributes: {
        exclude: ["user_id"],
      },
    }),
    setelah_pendidikan: await Models.keterangan_setelah_pendidikan.findOne({
      where: {
        user_id: req.user_id,
      },
      attributes: {
        exclude: ["user_id"],
      },
    }),
    tempat_tinggal: await Models.keterangan_tempat_tinggal.findOne({
      where: {
        user_id: req.user_id,
      },
      attributes: {
        exclude: ["user_id"],
      },
    }),
    wali: await Models.keterangan_wali.findOne({
      where: {
        user_id: req.user_id,
      },
      attributes: {
        exclude: ["user_id"],
      },
    }),
  };
  return res.json(data);
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

routes.get("/ayah-kandung", async (req, res) => {
  const data = await Models.keterangan_ayah_kandung.findOne({
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
  const data = await Models.keterangan_data_diri.findOne({
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
  const data = await Models.keterangan_hobi_siswa.findOne({
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
  const data = await Models.keterangan_ibu_kandung.findOne({
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
  const data = await Models.keterangan_kesehatan.findOne({
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
  const data = await Models.keterangan_pendidikan.findOne({
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
  const data = await Models.keterangan_perkembangan.findOne({
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
  const data = await Models.keterangan_setelah_pendidikan.findOne({
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
  const data = await Models.keterangan_tempat_tinggal.findOne({
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
  const data = await Models.keterangan_wali.findOne({
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
