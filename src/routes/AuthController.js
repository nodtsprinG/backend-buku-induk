const { Router } = require("express");
const { Models } = require("../models");
const { v4: uuidv4 } = require("uuid");
const { loginRequest, getMeRequest, loginSiswaRequest, codeAdminRequest } = require("../DTO/login-request");
const nodemailer = require("nodemailer");
const dotEnv = require("dotenv");
dotEnv.config();

const router = Router();

function generateRandomCode(length = 5) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomCode = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomCode += characters.charAt(randomIndex);
  }

  return randomCode;
}

router.post("/login-admin", loginRequest, async (req, res) => {
  const { email, password } = req.body;

  console.log(process.env.EMAIL);
  const data = await Models.admin.findOne({
    where: {
      email,
      password,
    },
  });

  if (data == undefined) {
    res.status(404).json({ message: "Password atau Email Salah" });
    return;
  }

  data.code = generateRandomCode();
  data.token = null;
  await data.save();

  try {
    if (process.env.EMAIL == undefined) throw new Error();
    const trasnport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const response = trasnport.sendMail({
      from: process.env.EMAIL,
      to: data.email,
      subject: "Buku Induk Code",
      html: `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>Kode Verifikasi Login</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f7f7f7;
              margin: 0;
              padding: 0;
            }
            .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
              text-align: center;
              padding: 20px 0;
            }
            .header img {
              max-width: 100px;
            }
            .content {
              margin: 20px 0;
            }
            .content h1 {
              font-size: 24px;
              color: #333333;
            }
            .content p {
              font-size: 16px;
              color: #666666;
              line-height: 1.5;
            }
            .verification-code {
              display: block;
              width: fit-content;
              margin: 20px auto;
              padding: 10px 20px;
              background-color: #4caf50;
              color: #ffffff;
              font-size: 18px;
              border-radius: 5px;
              text-align: center;
              text-decoration: none;
            }
            .footer {
              text-align: center;
              padding: 20px 0;
              font-size: 12px;
              color: #aaaaaa;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://smkn2-singosari.sch.id/wp-content/uploads/2021/10/cropped-logo-2.png" alt="Company Logo" />
            </div>
            <div class="content">
              <h1>Kode Verifikasi Login</h1>
              <p>Halo ${data.username},</p>
              <p>Untuk melanjutkan login, silakan masukkan kode verifikasi berikut:</p>
              <div class="verification-code">${data.code}</div>
              <p>Jika Anda tidak meminta kode ini, abaikan email ini.</p>
              <p>Terima kasih,</p>
              <p>Tim Rekayasa Perangkat Lunak</p>
            </div>
            <div class="footer">
              <p>&copy; 2024 Rekayasa Perangkat Lunak. Semua Hak Cipta Dilindungi.</p>
            </div>
          </div>
        </body>
      </html>`,
    });
  } catch (ex) {
    console.log("Erorr : Erorr send email .env is required, EMAIL, PASSWORD");
  }

  res.json({ code: data.code });
});

router.post("/code-admin", codeAdminRequest, async (req, res) => {
  try {
    const { code } = req.body;
    const data = await Models.admin.findOne({
      where: {
        code,
      },
    });

    if (data == undefined) {
      res.status(404).json({ message: "Kode OTP Salah" });
      return;
    }

    data.token = uuidv4();
    data.code = null;
    await data.save();

    res.json({
      id: data.id,
      username: data.username,
      email: data.email,
      token: data.token,
    });
  } catch (ex) {}
});

router.post("/login-siswa", loginSiswaRequest, async (req, res) => {
  const { nisn } = req.body;

  const data = await Models.user.findOne({
    include: [
      {
        model: Models.data_diri,
        as: "data_diri",
      },
    ],
    where: {
      nisn,
    },
  });

  if (data == undefined) {
    res.status(404).json({ message: "not found Siswa" });
    return;
  }

  res.json({
    id: data.id,
    full_name: data.data_diri.nama_lengkap,
  });
});

router.get("/me", getMeRequest, async (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];
  const admin = await Models.admin.findOne({
    where: {
      token,
    },
    attributes: ["id", "username", "email", "token"],
  });
  if (admin != undefined) {
    res.json(admin);
    return;
  } else res.status(401).json({ message: "Unauthorised" });
});

module.exports = router;
