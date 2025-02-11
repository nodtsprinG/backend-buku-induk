/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                J U R U S A N
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

? Bagian ini isinya api untuk memanipulasi nilai
! Dimohon memberikan note atau komentar pada bagian bagian route agar mempermudah development

*/

const { Router } = require('express')
const { Models } = require('../../models') // Adjust the path as necessary

const router = Router()
const nilai = Models.nilai

// Create a new 'nilai'
router.post('/nilai', async (req, res) => {
  try {
    const newNilai = await nilai.create(req.body)
    res.status(201).json(newNilai)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Read all 'nilai'
router.get('/nilai', async (req, res) => {
  try {
    const allNilai = await nilai.findAll()
    res.status(200).json(allNilai)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Read one 'nilai' by id
router.get('/nilai/:id', async (req, res) => {
  try {
    const oneNilai = await nilai.findByPk(req.params.id)
    if (oneNilai) {
      res.status(200).json(oneNilai)
    } else {
      res.status(404).json({ error: 'Nilai not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update a 'nilai'
router.put('/nilai/:id', async (req, res) => {
  try {
    const updatedNilai = await nilai.update(req.body, {
      where: { id: req.params.id },
    })
    if (updatedNilai) {
      res.status(200).json({ message: 'Nilai updated successfully' })
    } else {
      res.status(404).json({ error: 'Nilai not found' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
