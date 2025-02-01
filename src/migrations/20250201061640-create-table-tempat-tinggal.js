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
    return queryInterface.createTable('tempat_tinggal', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      alamat: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      no_telepon: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      tinggal_dengan: {
        type: DataTypes.ENUM('ortu','saudara','lainnya','wali'),
        allowNull: false
      },
      jarak_ke_sekolah: {
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
    return queryInterface.dropTable('tempat_tinggal')
  }
};
