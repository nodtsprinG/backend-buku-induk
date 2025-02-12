const { Router } = require('express');
const upload = require('../../middleware/uploadImage');
const { Models } = require('../../models');
const path = require('path');
const fs = require('fs');

const router = Router();

router.post('/upload-foto-diterima', upload.single('foto_diterima'), async (req, res) => {
  try {
    const { user_id } = req.body;
    const foto_diterima_url = req.file.path;

    const existingFoto = await Models.foto.findOne({ where: { user_id } });

    if (existingFoto) {
      await existingFoto.update({ foto_diterima_url });
      console.log('Foto diterima updated for user_id:', user_id);
    } else {
      await Models.foto.create({ user_id, foto_diterima_url });
      console.log('Foto diterima created for user_id:', user_id);
    }

    res.status(201).json({ message: 'Foto diterima uploaded or updated successfully' });
  } catch (error) {
    console.error('Error updating or creating foto:', error);
    res.status(500).json({ error: error.message });
  }
});

router.put('/update-foto-keluar', upload.single('foto_keluar'), async (req, res) => {
  try {
    const { user_id } = req.body;
    const foto_keluar_url = req.file.path;

    const existingFoto = await Models.foto.findOne({ where: { user_id } });

    if (existingFoto) {
      await existingFoto.update({ foto_keluar_url });
    } else {
      await Models.foto.create({ user_id, foto_keluar_url });
    }

    res.status(200).json({ message: 'Foto keluar uploaded or updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/foto-diterima/:user_id', async (req, res) => {
  try {
    const { user_id } = req.params;
    const foto = await Models.foto.findOne({ where: { user_id } });

    if (!foto || !foto.foto_diterima_url) {
      return res.status(404).json({ message: 'Foto diterima not found' });
    }

    const filePath = path.join(__dirname, '../../../', foto.foto_diterima_url);
    console.log('Looking for file at:', filePath);

    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      console.log('File not found:', filePath);
      res.status(404).json({ message: 'File not found on server' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/foto-keluar/:user_id', async (req, res) => {
  try {
    const { user_id } = req.params;
    const foto = await Models.foto.findOne({ where: { user_id } });

    if (!foto || !foto.foto_keluar_url) {
      return res.status(404).json({ message: 'Foto keluar not found' });
    }

    const filePath = path.join(__dirname, '../../', foto.foto_keluar_url);
    console.log('Looking for file at:', filePath);

    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      console.log('File not found:', filePath);
      res.status(404).json({ message: 'File not found on server' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 