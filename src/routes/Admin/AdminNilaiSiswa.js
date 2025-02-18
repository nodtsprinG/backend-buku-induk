/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                J U R U S A N
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

? Bagian ini isinya api untuk memanipulasi nilai
! Dimohon memberikan note atau komentar pada bagian bagian route agar mempermudah development

*/

const { Router } = require('express')
const { Models } = require('../../models') // Adjust the path as necessary
const { where } = require('sequelize')

const router = Router()
const nilai = Models.nilai

// Create a new 'nilai'
router.post('/nilai', async (req, res) => {
  try {
    const { semester, user_id, data } = req.body;

    // Ensure data is an array
    if (!Array.isArray(data) || data.length === 0) {
      return res.status(400).json({ error: 'Invalid data format' });
    }

    // Map data to include semester and user_id
    const nilaiEntries = data.map(item => ({
      semester,
      user_id,
      r: item.r,
      keterangan: item.keterangan,
      mapel_id: item.mapel_id
    }));

    // Bulk insert into the database
    const newNilai = await nilai.bulkCreate(nilaiEntries);

    res.status(201).json(newNilai);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


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
    const oneNilai = await nilai.findAll({
      where : {
        user_id : req.params.id
      },
      include : [
        {
          model: Models.mapel,
          as: 'mapel',
          attributes: ['nama'],
        },
      ]
    })
    if (oneNilai) {
      const user = await Models.user.findOne({
      where: {
        id: req.params.id
        },
        include : [
          {
            model: Models.angkatan,
            as: 'angkatan',
            attributes: ['tahun'],
          },
        ]
        })
        result = oneNilai.map((item) => ({
          ...item.toJSON(),
          tahun_pelajaran: user.angkatan ? (parseInt(parseInt(user.angkatan.tahun) + (Math.floor(item.semester / 2)) + 1)) + "/" + (parseInt(parseInt(user.angkatan.tahun) + (Math.floor(item.semester / 2)) + 1) + 1)  : null
        }))
      res.status(200).json(result)
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
