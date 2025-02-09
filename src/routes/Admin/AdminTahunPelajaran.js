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
const tahun_pelajaran = Models.tahun_pelajaran

//TODO:
//* POST satu jurusan
//! Belum bisa jadi jangan di coba dulu
router.post('/tahun_pelajaran', async (req, res) => {
    try {
        const newTahun_pelajaran = await tahun_pelajaran.create(req.body)
        res.status(201).json(newTahun_pelajaran)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/tahun_pelajaran', async (req, res) => {
    try {
        const allTahun_pelajaran = await tahun_pelajaran.findAll()
        res.status(200).json(allTahun_pelajaran)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/tahun_pelajaran/:id', async (req, res) => {
    try {
        const oneTahun_pelajaran = await tahun_pelajaran.findByPk(req.params.id)
        if (oneTahun_pelajaran) {
            res.status(200).json(oneTahun_pelajaran)
        } else {
            res.status(404).json({ error: 'Tahun_pelajaran not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.put('/tahun_pelajaran/:id', async (req, res) => {
    try {
        const updatedTahun_pelajaran = await tahun_pelajaran.update(req.body, {
            where: { id: req.params.id },
        })
        if (updatedTahun_pelajaran) {
            res.status(200).json({ message: 'Tahun_pelajaran updated successfully' })
        } else {
            res.status(404).json({ error: 'Tahun_pelajaran not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router
