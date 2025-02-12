const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'foto',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      foto_diterima_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      foto_keluar_url: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'foto',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'user_foto_diterima_unique',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'user_id' }, { name: 'foto_diterima_url' }],
        },
        {
          name: 'user_foto_keluar_unique',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'user_id' }, { name: 'foto_keluar_url' }],
        },
      ],
    }
  );
};