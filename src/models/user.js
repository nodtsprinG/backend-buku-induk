const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nisn: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "nisn"
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nama: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    angkatan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'angkatan',
        key: 'id'
      }
    },
    jurusan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'jurusan',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user',
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
        name: "nisn",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nisn" },
        ]
      },
      {
        name: "angkatan_user",
        using: "BTREE",
        fields: [
          { name: "angkatan_id" },
        ]
      },
      {
        name: "jurusan_user",
        using: "BTREE",
        fields: [
          { name: "jurusan_id" },
        ]
      },
    ]
  });
};
