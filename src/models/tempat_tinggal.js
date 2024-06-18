const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tempat_tinggal', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    alamat: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    no_telepon: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tinggal_dengan: {
      type: DataTypes.ENUM('ortu','saudara','lainnya','wali'),
      allowNull: false
    },
    jarak_ke_sekolah: {
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
    tableName: 'tempat_tinggal',
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
        name: "user_fk_keterangan_tempat_tinggal",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
