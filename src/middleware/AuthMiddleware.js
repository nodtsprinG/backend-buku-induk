const { Models } = require("../models");

const AuthMiddlewareAdmin = async (req, res, next) => {
  const authorization = req.headers["authorization"];
  if (authorization == null || authorization == undefined) {
    res.status(401).json({ message: "give me your token" });
    return;
  }

  const token = authorization.split(" ")[1];
  const data = await Models.user.findOne({
    where: {
      token,
    },
  });
  if (data == undefined || data == null) {
    res.status(401).json({ message: "give me your token" });
    return;
  }

  if (data.role != "admin") {
    res.status(400).json({ message: "Erorr role" });
    return;
  }

  req.user_id = data.id;
  next();
};

const AuthMiddlewareSiswa = async (req, res, next) => {
  const authorization = req.headers["authorization"];
  if (authorization == null || authorization == undefined) {
    res.status(401).json({ message: "give me your token" });
    return;
  }

  const token = authorization.split(" ")[1];
  const data = await Models.user.findOne({
    where: {
      token,
    },
  });
  if (data == undefined || data == null) {
    res.status(401).json({ message: "give me your token" });
    return;
  }

  if (data.role != "siswa") {
    res.status(400).json({ message: "Erorr role" });
    return;
  }

  req.user_id = data.id;
  next();
};

module.exports = { AuthMiddlewareAdmin, AuthMiddlewareSiswa };
