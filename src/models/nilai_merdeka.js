const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'nilai_merdeka',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      r: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      keterangan: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      mapel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'mapel',
          key: 'id',
        },
      },
      tahun_pelajaran_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tahun_pelajaran',
          key: 'id',
        },
      },
      user_id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id"
        }
      }
    },
    {
      sequelize,
      tableName: 'nilai_merdeka',
      timestamps: false,
    }
  )
}
