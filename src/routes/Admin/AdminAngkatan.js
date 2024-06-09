const { Router } = require("express");
const { Models } = require("../../models"); // Adjust the path as necessary

const router = Router();
const angkatan = Models.angkatan;

// Create a new 'angkatan'
router.post('/angkatan', async (req, res) => {
  try {
    const newAngkatan = await angkatan.create(req.body);
    res.status(201).json(newAngkatan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all 'angkatan'
router.get('/angkatan', async (req, res) => {
  try {
    const allAngkatan = await angkatan.findAll();
    res.status(200).json(allAngkatan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read one 'angkatan' by id
router.get('/angkatan/:id', async (req, res) => {
  try {
    const oneAngkatan = await angkatan.findByPk(req.params.id);
    if (oneAngkatan) {
      res.status(200).json(oneAngkatan);
    } else {
      res.status(404).json({ error: 'Angkatan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an 'angkatan'
router.put('/angkatan/:id', async (req, res) => {
  try {
    const updatedAngkatan = await angkatan.update(req.body, {
      where: { id: req.params.id }
    });
    if (updatedAngkatan) {
      res.status(200).json({ message: 'Angkatan updated successfully' });
    } else {
      res.status(404).json({ error: 'Angkatan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an 'angkatan'
router.delete('/angkatan/:id', async (req, res) => {
  try {
    const deletedAngkatan = await angkatan.destroy({
      where: { id: req.params.id }
    });
    if (deletedAngkatan) {
      res.status(200).json({ message: 'Angkatan deleted successfully' });
    } else {
      res.status(404).json({ error: 'Angkatan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
