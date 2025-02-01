'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.createTable('pendidikan', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      sebelumnya_tamatan_dari: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      sebelumnya_tanggal_dan_ijazah: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      sebelumnya_tanggal_skhun_dan_: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      sebelumnya_lama_belajar: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      pindahan_dari_sekolah: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      pindahan_alasan: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      diterima_di_kelas: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      diterima_di_bidang_keahlian: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      diterima_di_program_keahlian: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      diterima_di_paket_keahlian: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      diterima_tanggal: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('pendidikan')
  }
};
