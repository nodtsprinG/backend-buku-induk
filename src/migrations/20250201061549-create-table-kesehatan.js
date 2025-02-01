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
    return queryInterface.create('kesehatan', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      gol_darah: {
        type: DataTypes.ENUM('A','B','O','AB'),
        allowNull: true
      },
      penyakit_pernah_diderita: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      kelainan_jasmani: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      tinggi: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      berat_badan: {
        type: DataTypes.STRING(255),
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
    return queryInterface.dropTable('kesehatan')
  }
};
