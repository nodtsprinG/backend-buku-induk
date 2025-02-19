/**
 * @module ModelNilaiMerdeka
 * @deskripsi Model Sequelize untuk tabel 'nilai_merdeka'.
 * @param {Sequelize} sequelize - Instance Sequelize yang digunakan.
 * @param {DataTypes} DataTypes - DataTypes dari Sequelize untuk mendefinisikan tipe data.
 * @returns {Sequelize.Model} - Mengembalikan model Sequelize untuk tabel 'nilai_merdeka'.
 */

/**
 * Definisi model NilaiMerdeka.
 * @typedef {object} NilaiMerdeka
 * @property {number} id - Identifikasi unik untuk nilai merdeka. Di-auto-increment.
 * @property {number} r - Nilai yang diberikan (angka).
 * @property {string} keterangan - Keterangan tambahan mengenai nilai.
 * @property {number} mapel_id - ID mata pelajaran terkait.
 * @property {number} tahun_pelajaran_id - ID tahun pelajaran terkait.
 * @property {number} user_id - ID pengguna yang terkait dengan nilai ini.
 */

/**
 * Definisi model Sequelize untuk tabel 'nilai_merdeka'.
 * @type {Sequelize.Model<NilaiMerdeka>}
 */
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
      semester: {
        type: DataTypes.INTEGER,
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
      tableName: 'nilai_merdeka',
      timestamps: false,
    }
  )
}
