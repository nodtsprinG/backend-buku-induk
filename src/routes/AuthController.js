const { Router } = require("express");
const { Models } = require("../models");
const { v4: uuidv4 } = require("uuid");
const { loginRequest, getMeRequest, loginSiswaRequest } = require("../DTO/login-request");

const router = Router();

router.post("/login-admin", loginRequest, async (req, res) => {
  const { username, password } = req.body;

  const data = await Models.admin.findOne({
    where: {
      username,
      password,
    },
  });

  if (data == undefined) {
    res.status(404).json({ message: "not found admin" });
    return;
  }

  data.token = uuidv4();
  await data.save();

  res.json({
    id: data.id,
    username: data.username,
    token: data.token,
  });
});

router.post("/login-siswa", loginSiswaRequest, async (req, res) => {
  const { nisn, tanggal_lahir } = req.body;

  const data = await Models.user.findOne({
    include: [
      {
        model: Models.jurusan,
        as: "jurusan",
      },
      {
        model: Models.angkatan,
        as: "angkatan",
      },
    ],
    where: {
      nisn,
      tanggal_lahir,
    },
  });

  if (data == undefined) {
    res.status(404).json({ message: "not found Siswa" });
    return;
  }

  data.token = uuidv4();
  await data.save();

  res.json({
    id: data.id,
    nisn: data.nisn,
    tanggal_lahir: data.tanggal_lahir,
    nama: data.nama,
    jurusan: data.jurusan.nama,
    angkatan: data.angkatan.tahun,
    token: data.token,
  });
});

router.get("/me", getMeRequest, async (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];
  const admin = await Models.admin.findOne({
    where: {
      token,
    },
    attributes: ["id", "username", "token"],
  });
  const siswa = await Models.user.findOne({
    include: [
      {
        model: Models.jurusan,
        as: "jurusan",
      },
      {
        model: Models.angkatan,
        as: "angkatan",
      },
    ],
    where: {
      token,
    },
  });

  if (admin != undefined) {
    res.json(admin);
    return;
  } else if (siswa != undefined) {
    res.json({
      id: siswa.id,
      nisn: siswa.nisn,
      tanggal_lahir: siswa.tanggal_lahir,
      nama: siswa.nama,
      jurusan: siswa.jurusan.nama,
      angkatan: siswa.angkatan.tahun,
      token: siswa.token,
    });
    return;
  } else res.status(401).json({ message: "Unauthorised" });
});

module.exports = router;
