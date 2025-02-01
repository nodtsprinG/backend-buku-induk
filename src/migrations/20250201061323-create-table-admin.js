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

    return queryInterface.createTable('admin', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: "username"
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      token: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      username: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      code: {
        type: DataTypes.STRING(5),
        allowNull: true
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
    return queryInterface.dropTable('admin')
  }
};
