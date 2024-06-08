const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('setelah_pendidikan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    melanjutkan_ke: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bekerja_nama_perusahaan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bekerja_tanggal_mulai: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    bekerja_penghasilan: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'setelah_pendidikan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user_fk_keterangan_setelah_pendidikan",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
