var DataTypes = require("sequelize").DataTypes;
var _admin = require("./admin");
var _ayah_kandung = require("./ayah_kandung");
var _data_diri = require("./data_diri");
var _hobi_siswa = require("./hobi_siswa");
var _ibu_kandung = require("./ibu_kandung");
var _kesehatan = require("./kesehatan");
var _pendidikan = require("./pendidikan");
var _perkembangan = require("./perkembangan");
var _setelah_pendidikan = require("./setelah_pendidikan");
var _tempat_tinggal = require("./tempat_tinggal");
var _user = require("./user");
var _wali = require("./wali");

function initModels(sequelize) {
  var admin = _admin(sequelize, DataTypes);
  var ayah_kandung = _ayah_kandung(sequelize, DataTypes);
  var data_diri = _data_diri(sequelize, DataTypes);
  var hobi_siswa = _hobi_siswa(sequelize, DataTypes);
  var ibu_kandung = _ibu_kandung(sequelize, DataTypes);
  var kesehatan = _kesehatan(sequelize, DataTypes);
  var pendidikan = _pendidikan(sequelize, DataTypes);
  var perkembangan = _perkembangan(sequelize, DataTypes);
  var setelah_pendidikan = _setelah_pendidikan(sequelize, DataTypes);
  var tempat_tinggal = _tempat_tinggal(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var wali = _wali(sequelize, DataTypes);

  ayah_kandung.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(ayah_kandung, { as: "ayah_kandungs", foreignKey: "user_id"});
  data_diri.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(data_diri, { as: "data_diris", foreignKey: "user_id"});
  hobi_siswa.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(hobi_siswa, { as: "hobi_siswas", foreignKey: "user_id"});
  ibu_kandung.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(ibu_kandung, { as: "ibu_kandungs", foreignKey: "user_id"});
  kesehatan.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(kesehatan, { as: "kesehatans", foreignKey: "user_id"});
  pendidikan.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(pendidikan, { as: "pendidikans", foreignKey: "user_id"});
  perkembangan.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(perkembangan, { as: "perkembangans", foreignKey: "user_id"});
  setelah_pendidikan.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(setelah_pendidikan, { as: "setelah_pendidikans", foreignKey: "user_id"});
  tempat_tinggal.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(tempat_tinggal, { as: "tempat_tinggals", foreignKey: "user_id"});
  wali.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(wali, { as: "walis", foreignKey: "user_id"});

  return {
    admin,
    ayah_kandung,
    data_diri,
    hobi_siswa,
    ibu_kandung,
    kesehatan,
    pendidikan,
    perkembangan,
    setelah_pendidikan,
    tempat_tinggal,
    user,
    wali,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
