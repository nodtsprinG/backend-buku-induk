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
    return queryInterface.createTable('ibu_kandung', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nama: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      tempat_lahir: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      tanggal_lahir: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      agama: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      kewarganegaraan: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      pendidikan: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      pekerjaan: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      pengeluaran_per_bulan: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      alamat_dan_no_telepon: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('masih hidup','meninggal','',''),
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
    return queryInterface.dropTable('ibu_kandung')
  }
};
