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
    return queryInterface.bulkInsert('kesehatan', [
      {
        gol_darah: 'O',
        penyakit_pernah_diderita: 'Asma',
        kelainan_jasmani: 'Tidak ada',
        tinggi: '175 cm',
        berat_badan: '70 kg',
        user_id: 1,
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
