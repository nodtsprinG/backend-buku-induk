const { Router } = require("express");
const { Models } = require("../../models");
const { where } = require("sequelize");
const { akunRequest } = require("../../DTO/akun-request");

const routes = Router();

routes.get("/akun", async (req, res) => {
  const { jurusan, angkatan } = req.query;
  const data = await Models.user.findAll({
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

  return res.json(
    data.map((res) => {
      return {
        id: res.id,
        nisn: res.nisn,
        tanggal_lahir: res.tanggal_lahir,
        nama: res.nama,
        jurusan: res.jurusan.nama,
        angkatan: res.angkatan.tahun,
      };
    })
  );
});

routes.post("/akun", akunRequest, async (req, res) => {
  const data = await Models.user.create(req.body);
  return res.status(201).json(data);
});

routes.get("/akun/:id", async (req, res) => {
  const data = await Models.user.findOne({
    where: {
      id: req.params.id,
    },
  });
  return res.json(data);
});

routes.put("/akun/:id", async (req, res) => {
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
