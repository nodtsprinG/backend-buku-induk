const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'ayah_kandung',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nama: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      tempat_lahir: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      tanggal_lahir: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      agama: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      kewarganegaraan: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      pendidikan: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      pekerjaan: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      pengeluaran_per_bulan: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      alamat_dan_no_telepon: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('masih hidup', 'meninggal'),
        allowNull: false,
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
      tableName: 'ayah_kandung',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'user_fk_keterangan_ayah_kandung',
          using: 'BTREE',
          fields: [{ name: 'user_id' }],
        },
      ],
    }
  )
}
