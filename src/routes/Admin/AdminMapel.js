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
const mapel = Models.mapel

//TODO:
//* POST satu jurusan
//! Belum bisa jadi jangan di coba dulu
router.post('/mapel', async (req, res) => {
    try {
        const newMapel = await mapel.create(req.body)
        res.status(201).json(newMapel)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/mapel', async (req, res) => {
    try {
        const allMapel = await mapel.findAll()
        res.status(200).json(allMapel)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/mapel/:id', async (req, res) => {
    try {
        const oneMapel = await mapel.findByPk(req.params.id)
        if (oneMapel) {
            res.status(200).json(oneMapel)
        } else {
            res.status(404).json({ error: 'Mapel not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.put('/mapel/:id', async (req, res) => {
    try {
        const updatedMapel = await mapel.update(req.body, {
            where: { id: req.params.id },
        })
        if (updatedMapel) {
            res.status(200).json({ message: 'Mapel updated successfully' })
        } else {
            res.status(404).json({ error: 'Mapel not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router
