'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert([
    {
      nama: "Rekayasa Perangkat Lunak"
    },
    {
      nama: "Desain Komunikasi Visual"
    },
    {
      nama: "Audio Video"
    },
    {
      nama: "Broadcasting"
    },
    {
      nama: "Animasi"
    },
    {
      nama: "Teknik Komunikasi Jaringan"
    },
    {
      nama: "Elektronika Industri"
    },
    {
      nama: "Mekatronika"
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
