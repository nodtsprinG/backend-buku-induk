const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'tahun_pelajaran',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nama: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: 'tahun_pelajaran',
      },
    },
    {
      sequelize,
      tableName: 'tahun_pelajaran',
      timestamps: false,
    }
  )
}
