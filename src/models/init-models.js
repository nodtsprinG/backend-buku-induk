var DataTypes = require("sequelize").DataTypes;
var _keterangan_ayah_kandung = require("./keterangan_ayah_kandung");
var _keterangan_data_diri = require("./keterangan_data_diri");
var _keterangan_hobi_siswa = require("./keterangan_hobi_siswa");
var _keterangan_ibu_kandung = require("./keterangan_ibu_kandung");
var _keterangan_kesehatan = require("./keterangan_kesehatan");
var _keterangan_pendidikan = require("./keterangan_pendidikan");
var _keterangan_perkembangan = require("./keterangan_perkembangan");
var _keterangan_setelah_pendidikan = require("./keterangan_setelah_pendidikan");
var _keterangan_tempat_tinggal = require("./keterangan_tempat_tinggal");
var _keterangan_wali = require("./keterangan_wali");
var _user = require("./user");

function initModels(sequelize) {
  var keterangan_ayah_kandung = _keterangan_ayah_kandung(sequelize, DataTypes);
  var keterangan_data_diri = _keterangan_data_diri(sequelize, DataTypes);
  var keterangan_hobi_siswa = _keterangan_hobi_siswa(sequelize, DataTypes);
  var keterangan_ibu_kandung = _keterangan_ibu_kandung(sequelize, DataTypes);
  var keterangan_kesehatan = _keterangan_kesehatan(sequelize, DataTypes);
  var keterangan_pendidikan = _keterangan_pendidikan(sequelize, DataTypes);
  var keterangan_perkembangan = _keterangan_perkembangan(sequelize, DataTypes);
  var keterangan_setelah_pendidikan = _keterangan_setelah_pendidikan(sequelize, DataTypes);
  var keterangan_tempat_tinggal = _keterangan_tempat_tinggal(sequelize, DataTypes);
  var keterangan_wali = _keterangan_wali(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  keterangan_ayah_kandung.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(keterangan_ayah_kandung, { as: "keterangan_ayah_kandungs", foreignKey: "user_id"});
  keterangan_data_diri.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(keterangan_data_diri, { as: "keterangan_data_diris", foreignKey: "user_id"});
  keterangan_hobi_siswa.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(keterangan_hobi_siswa, { as: "keterangan_hobi_siswas", foreignKey: "user_id"});
  keterangan_ibu_kandung.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(keterangan_ibu_kandung, { as: "keterangan_ibu_kandungs", foreignKey: "user_id"});
  keterangan_kesehatan.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(keterangan_kesehatan, { as: "keterangan_kesehatans", foreignKey: "user_id"});
  keterangan_pendidikan.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(keterangan_pendidikan, { as: "keterangan_pendidikans", foreignKey: "user_id"});
  keterangan_perkembangan.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(keterangan_perkembangan, { as: "keterangan_perkembangans", foreignKey: "user_id"});
  keterangan_setelah_pendidikan.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(keterangan_setelah_pendidikan, { as: "keterangan_setelah_pendidikans", foreignKey: "user_id"});
  keterangan_tempat_tinggal.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(keterangan_tempat_tinggal, { as: "keterangan_tempat_tinggals", foreignKey: "user_id"});
  keterangan_wali.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(keterangan_wali, { as: "keterangan_walis", foreignKey: "user_id"});

  return {
    keterangan_ayah_kandung,
    keterangan_data_diri,
    keterangan_hobi_siswa,
    keterangan_ibu_kandung,
    keterangan_kesehatan,
    keterangan_pendidikan,
    keterangan_perkembangan,
    keterangan_setelah_pendidikan,
    keterangan_tempat_tinggal,
    keterangan_wali,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
