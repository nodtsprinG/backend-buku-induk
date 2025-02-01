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
    queryInterface.createTable('setelah_pendidikan', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      melanjutkan_ke: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      bekerja_nama_perusahaan: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      bekerja_tanggal_mulai: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      bekerja_penghasilan: {
        type: DataTypes.STRING(255),
        allowNull: true
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
    return queryInterface.dropTable('setelah_pendidikan')
  }
};
