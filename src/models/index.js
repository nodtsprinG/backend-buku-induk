const { Sequelize } = require("sequelize");
const initModels = require("./init-models");

module.exports = {
  Models: initModels(
    new Sequelize({
      host: "localhost",
      database: "db_aplikasi_buku_induk",
      username: "root",
      dialect: "mysql",
      password : "BigBlueApple",
      port: 3306,
      logging: false,
    })
  ),
};
