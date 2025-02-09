/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                N I L A I   S I S W A
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

? Bagian ini isinya api untuk memanipulasi nilai siswa
! Dimohon memberikan note atau komentar pada bagian bagian route agar mempermudah development

*/

const { Router } = require('express')
const { Models } = require('../../models')

const router = Router()
const nilai = Models.nilai

//TODO:
//* POST satu nilai
//! Belum bisa jadi jangan di coba dulu
router.post('/api/nilai', async (req, res) => {
    const nilai = await nilai.create(req.body)
})

module.exports = router
