const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'wali',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nama: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      tempat_lahir: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      tanggal_lahir: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      agama: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      kewarganegaraan: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      pendidikan: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      pekerjaan: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      pengeluaran_per_bulan: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      alamat_dan_no_telepon: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'wali',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'user_fk_keterangan_wali',
          using: 'BTREE',
          fields: [{ name: 'user_id' }],
        },
      ],
    }
  )
}
