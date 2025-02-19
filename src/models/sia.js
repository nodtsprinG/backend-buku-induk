/**
 * @module ModelMapel
 * @deskripsi Model Sequelize untuk tabel 'mapel'.
 * @param {Sequelize} sequelize - Instance Sequelize yang digunakan.
 * @param {DataTypes} DataTypes - DataTypes dari Sequelize untuk mendefinisikan tipe data.
 * @returns {Sequelize.Model} - Mengembalikan model Sequelize untuk tabel 'mapel'.
 */

/**
 * Definisi model Mapel.
 * @typedef {object} Mapel
 * @property {number} id - Identifikasi unik untuk mapel. Di-auto-increment.
 * @property {string} nama - Nama mata pelajaran. Harus unik.
 */

/**
 * Definisi model Sequelize untuk tabel 'mapel'.
 * @type {Sequelize.Model<Mapel>}
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      'sia',
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        sakit: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        izin: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        alpha: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        semester: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
      },
      {
        sequelize,
        tableName: 'sia',
        timestamps: false,
      }
    )
  }
  