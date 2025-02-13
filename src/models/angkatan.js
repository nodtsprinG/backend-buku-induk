/**
 * @module ModelAngkatan
 * @deskripsi Model Sequelize untuk tabel 'angkatan'.
 * @param {Sequelize} sequelize - Instance Sequelize yang digunakan.
 * @param {DataTypes} DataTypes - DataTypes dari Sequelize untuk mendefinisikan tipe data.
 * @returns {Sequelize.Model} - Mengembalikan model Sequelize untuk tabel 'angkatan'.
 */

/**
 * Definisi model Angkatan.
 * @typedef {object} Angkatan
 * @property {number} id - Identifier unik untuk angkatan. Di-auto-increment.
 * @property {number} tahun - Tahun yang terkait dengan angkatan.
 */

/**
 * Definisi model Sequelize untuk tabel 'angkatan'.
 * @type {Sequelize.Model<Angkatan>}
 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'angkatan',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      tahun: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'angkatan',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
      ],
    }
  )
}
