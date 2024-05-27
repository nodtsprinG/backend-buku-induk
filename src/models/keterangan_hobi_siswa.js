const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('keterangan_hobi_siswa', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kesenian: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    olahraga: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    organisasi: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lain_lain: {
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
    tableName: 'keterangan_hobi_siswa',
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
        name: "user_fk_keterangan_hobi_siswa",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
