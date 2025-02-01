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
    return queryInterface.createTable('wali', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nama: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      tempat_lahir: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      tanggal_lahir: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      agama: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      kewarganegaraan: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      pendidikan: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      pekerjaan: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      pengeluaran_per_bulan: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      alamat_dan_no_telepon: {
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
    return queryInterface.dropTable('wali')
  }
};
