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
    return queryInterface.bulkInsert('pendidikan', [
      {
        sebelumnya_tamatan_dari: 'SMP Negeri 1 Malang',
        sebelumnya_tanggal_dan_ijazah: '2022-06-12', 
        sebelumnya_tanggal_skhun_dan_: '2022-06-12',
        sebelumnya_lama_belajar: '3 Tahun',
        pindahan_dari_sekolah: null,
        pindahan_alasan: null,
        diterima_di_kelas: 10,
        diterima_di_bidang_keahlian: 'Teknik Komputer dan Jaringan',
        diterima_di_program_keahlian: 'Komputer dan Jaringan',
        diterima_di_paket_keahlian: 'Teknik Komputer',
        diterima_tanggal: '2022-07-01',
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
