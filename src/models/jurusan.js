/**
 * @module ModelJurusan
 * @deskripsi Model Sequelize untuk tabel 'jurusan'.
 * @param {Sequelize} sequelize - Instance Sequelize yang digunakan.
 * @param {DataTypes} DataTypes - DataTypes dari Sequelize untuk mendefinisikan tipe data.
 * @returns {Sequelize.Model} - Mengembalikan model Sequelize untuk tabel 'jurusan'.
 */

/**
 * Definisi model Jurusan.
 * @typedef {object} Jurusan
 * @property {number} id - Identifikasi unik untuk jurusan. Di-auto-increment.
 * @property {string} nama - Nama jurusan.
 */

/**
 * Definisi model Sequelize untuk tabel 'jurusan'.
 * @type {Sequelize.Model<Jurusan>}
 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'jurusan',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nama: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'jurusan',
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