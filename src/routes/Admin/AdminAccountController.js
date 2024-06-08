const { Router } = require("express");
const { Models } = require("../../models");
const { akunRequest } = require("../../DTO/akun-request");

const routes = Router();

routes.get("/jurusan", async (req, res) => {
  const data = await Models.jurusan.findAll();
  res.json(data);
});

routes.get("/angkatan", async (req, res) => {
  const data = await Models.angkatan.findAll();
  res.json(data);
});

routes.get("/akun", async (req, res) => {
  const { jurusan, angkatan } = req.query;

  const userData = await Models.user.findAll({
    include: [
      {
        model: Models.jurusan,
        as: "jurusan",
        attributes: ["nama"],
      },
      {
        model: Models.angkatan,
        as: "angkatan",
        attributes: ["tahun"],
      },
    ],
  });

  let data = userData.map((user) => {
    return {
      id: user.id,
      nisn: user.nisn,
      tanggal_lahir: user.tanggal_lahir,
      nama: user.nama,
      jurusan: user.jurusan.nama,
      angkatan: user.angkatan.tahun,
    };
  });

  if (jurusan) data = data.filter((e) => e.jurusan == jurusan);
  if (angkatan) data = data.filter((e) => e.angkatan == angkatan);

  return res.json(data);
});

routes.post("/akun", akunRequest, async (req, res) => {
  try {
    const data = await Models.user.create(req.body);
    return res.status(201).json(data);
  } catch (ex) {
    return res.status(400).json({ message: "NISN sudah digunakan" });
  }
});

routes.get("/akun/:id", async (req, res) => {
  const data = await Models.user.findOne({
    include: [
      {
        model: Models.jurusan,
        as: "jurusan",
        attributes: ["nama"],
      },
      {
        model: Models.angkatan,
        as: "angkatan",
        attributes: ["tahun"],
      },
      {
        model: Models.data_diri,
        as: "data_diris",
      },
      {
        model: Models.perkembangan,
        as: "perkembangans",
      },
    ],
    where: {
      id: req.params.id,
    },
  });

  return res.json({
    id: data.id,
    nisn: data.nisn,
    tanggal_lahir: data.tanggal_lahir,
    nama: data.nama,
    jurusan: data.jurusan.nama,
    angkatan: data.angkatan.tahun,
    token: data.token,
    status: data.data_diris.length != 0,
    status_perkembangan: data.perkembangans.length != 0,
  });
});

routes.put("/akun/:id", async (req, res) => {
  try {
    const data = await Models.user.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await data.update(req.body);

    return res.json(updatedUser);
  } catch (ex) {
    return res.status(400).json({ message: ex });
  }
});

routes.delete("/akun/:id", async (req, res) => {
  const data = await Models.user.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!data) {
    return res.status(404).json({ message: "User not found" });
  }

  await data.destroy();

  return res.json({ message: "user Deleted Successfully" });
});

module.exports = routes;
