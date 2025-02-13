/**
 * @module ModelUser
 * @deskripsi Model Sequelize untuk tabel 'user'.
 * @param {Sequelize} sequelize - Instance Sequelize yang digunakan.
 * @param {DataTypes} DataTypes - DataTypes dari Sequelize untuk mendefinisikan tipe data.
 * @returns {Sequelize.Model} - Mengembalikan model Sequelize untuk tabel 'user'.
 */

/**
 * Definisi model User.
 * @typedef {object} User
 * @property {number} id - Identifikasi unik untuk user. Di-auto-increment.
 * @property {string} nisn - Nomor Induk Siswa Nasional (NISN) yang unik untuk setiap user.
 * @property {number} angkatan_id - ID angkatan yang berhubungan dengan user.
 * @property {number} jurusan_id - ID jurusan yang berhubungan dengan user.
 * @property {string} [token] - Token untuk autentikasi atau identifikasi tambahan, bisa null.
 */

/**
 * Definisi model Sequelize untuk tabel 'user'.
 * @type {Sequelize.Model<User>}
 */
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'user',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nisn: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: 'nisn',
      },
      angkatan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'angkatan',
          key: 'id',
        },
      },
      jurusan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'jurusan',
          key: 'id',
        },
      },
      token: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'user',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'nisn',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'nisn' }],
        },
        {
          name: 'angkatan_user',
          using: 'BTREE',
          fields: [{ name: 'angkatan_id' }],
        },
        {
          name: 'jurusan_user',
          using: 'BTREE',
          fields: [{ name: 'jurusan_id' }],
        },
      ],
    }
  )
}
