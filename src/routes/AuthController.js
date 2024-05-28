const { Router } = require("express");
const { Models } = require("../models");
const { v4: uuidv4 } = require("uuid");
const { where } = require("sequelize");
const { loginRequest, generateTokenRequest } = require("../DTO/login-request");

const router = Router();

function makeRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

router.post("/login", loginRequest, async (req, res) => {
  const { email, password } = req.body;
  const data = await Models.user.findOne({
    where: {
      email,
      password,
    },
  });

  if (data == undefined) {
    res.status(400).json({ message: "not found user" });
    return;
  }

  const code = makeRandomString(5);

  await Models.user.update(
    {
      code: code,
    },
    {
      where: {
        id: data.id,
      },
    }
  );

  res.json({ code });
});

router.post("/generate-code", generateTokenRequest, async (req, res) => {
  const { code } = req.body;
  const data = await Models.user.findOne({
    where: {
      code: code,
    },
  });

  if (data == undefined) {
    res.status(400).json({ message: "not found user" });
    return;
  }

  const token = uuidv4();
  await Models.user.update(
    {
      token,
      code: null,
    },
    {
      where: {
        id: data.id,
      },
    }
  );
  res.json({
    email: data.email,
    username: data.username,
    role: data.role,
    token: token,
  });
});

module.exports = router;
