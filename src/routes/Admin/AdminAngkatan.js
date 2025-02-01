/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                A N G K A T A N
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

? Bagian ini isinya api untuk memanipulasi angkatan
! Dimohon memberikan note atau komentar pada bagian bagian route agar mempermudah development

*/

const { Router } = require('express')
const { Models } = require('../../models') // Adjust the path as necessary

const router = Router()
const angkatan = Models.angkatan

//* Membuat angkatan baru
router.post('/angkatan', async (req, res) => {
    try {
        const newAngkatan = await angkatan.create(req.body)
        res.status(201).json(newAngkatan)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

//* Mengambil semua angkatan
router.get('/angkatan', async (req, res) => {
    try {
        const allAngkatan = await angkatan.findAll()
        res.status(200).json(allAngkatan)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

//* Mengambil satu angkata 'menggunakan id angkatan'
router.get('/angkatan/:id', async (req, res) => {
    try {
        const oneAngkatan = await angkatan.findByPk(req.params.id)
        if (oneAngkatan) {
            res.status(200).json(oneAngkatan)
        } else {
            res.status(404).json({ error: 'Angkatan not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

//* Merubah angkatan berdasarkan id angkatan
router.put('/angkatan/:id', async (req, res) => {
    try {
        console.log(req.body)
        const updatedAngkatan = await angkatan.update(
            { tahun: req.body.tahun },
            {
                where: { id: req.params.id },
            }
        )
        if (updatedAngkatan) {
            res.status(200).json({ message: 'Angkatan updated successfully' })
        } else {
            res.status(404).json({ error: 'Angkatan not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

//! HAPUS ANGKATAN UDAH DI HAPUS. DIHARAMKAN. SEGERA DIHAPUS DI UI JIKA MASIH ADA

module.exports = router
