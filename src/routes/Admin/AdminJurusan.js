/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                J U R U S A N
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

? Bagian ini isinya api untuk memanipulasi jurusan
! Dimohon memberikan note atau komentar pada bagian bagian route agar mempermudah development

*/

const { Router } = require("express")
const { Models } = require("../../models"); // Adjust the path as necessary

const router = Router()
const jurusan = Models.jurusan

// Create a new 'jurusan'
router.post('/jurusan', async (req, res) => {
  try {
    const newJurusan = await jurusan.create(req.body);
    res.status(201).json(newJurusan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all 'jurusan'
router.get('/jurusan', async (req, res) => {
  try {
    const allJurusan = await jurusan.findAll();
    res.status(200).json(allJurusan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read one 'jurusan' by id
router.get('/jurusan/:id', async (req, res) => {
  try {
    const oneJurusan = await jurusan.findByPk(req.params.id);
    if (oneJurusan) {
      res.status(200).json(oneJurusan);
    } else {
      res.status(404).json({ error: 'Jurusan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a 'jurusan'
router.put('/jurusan/:id', async (req, res) => {
  try {
    const updatedJurusan = await jurusan.update(req.body, {
      where: { id: req.params.id }
    });
    if (updatedJurusan) {
      res.status(200).json({ message: 'Jurusan updated successfully' });
    } else {
      res.status(404).json({ error: 'Jurusan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//! HAPUS JURUSAN UDAH DI HAPUS. DIHARAMKAN. SEGERA DIHAPUS DI UI JIKA MASIH ADA

module.exports = router;
