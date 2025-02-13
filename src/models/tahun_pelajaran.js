/**
 * @module ModelTahunPelajaran
 * @deskripsi Model Sequelize untuk tabel 'tahun_pelajaran'.
 * @param {Sequelize} sequelize - Instance Sequelize yang digunakan.
 * @param {DataTypes} DataTypes - DataTypes dari Sequelize untuk mendefinisikan tipe data.
 * @returns {Sequelize.Model} - Mengembalikan model Sequelize untuk tabel 'tahun_pelajaran'.
 */

/**
 * Definisi model TahunPelajaran.
 * @typedef {object} TahunPelajaran
 * @property {number} id - Identifikasi unik untuk tahun pelajaran. Di-auto-increment.
 * @property {string} nama - Nama tahun pelajaran. Harus unik.
 */

/**
 * Definisi model Sequelize untuk tabel 'tahun_pelajaran'.
 * @type {Sequelize.Model<TahunPelajaran>}
 */
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