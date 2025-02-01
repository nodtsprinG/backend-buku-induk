/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                A K U N  S I S W A
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

? Bagian ini isinya api untuk memanipulasi akun siswa
! Dimohon memberikan note atau komentar pada bagian bagian route agar mempermudah development

TODO : 
- Mengganti semua akun menjadi siswa // Gak sesuai namanya

*/

const { Router } = require('express')
const { Models } = require('../../models')
const { akunRequest } = require('../../DTO/akun-request')

const routes = Router()

routes.get('/akun', async (req, res) => {
  const { jurusan, angkatan, search } = req.query

  const userData = await Models.user.findAll({
    include: [
      {
        model: Models.jurusan,
        as: 'jurusan',
        attributes: ['nama'],
      },
      {
        model: Models.angkatan,
        as: 'angkatan',
        attributes: ['tahun'],
      },
      {
        model: Models.data_diri,
        as: 'data_diri',
      },
    ],
  })

  let data = userData.map((user) => {
    return {
      id: user.id,
      nisn: user.nisn,
      nama: user.data_diri.nama_lengkap,
      jurusan: user.jurusan.nama,
      angkatan: user.angkatan.tahun,
    }
  })

  if (jurusan) data = data.filter((e) => e.jurusan == jurusan)
  if (angkatan) data = data.filter((e) => e.angkatan == angkatan)
  if (search)
    data = data.filter((e) =>
      e.nama.toLowerCase().includes(search.toLowerCase())
    )

  return res.json(data)
})

routes.post('/akun', akunRequest, async (req, res) => {
  try {
    const data = await Models.user.create(req.body)
    return res.status(201).json(data)
  } catch (ex) {
    return res.status(400).json({ message: 'NISN sudah digunakan' })
  }
})

routes.get('/akun/:id', async (req, res) => {
  try {
    const userInstance = await Models.user.findOne({
      include: [
        {
          model: Models.jurusan,
          as: 'jurusan',
          attributes: ['nama'],
        },
        {
          model: Models.angkatan,
          as: 'angkatan',
          attributes: ['tahun'],
        },
        {
          model: Models.data_diri,
          as: 'data_diri',
        },
        {
          model: Models.perkembangan,
          as: 'perkembangan',
        },
        // Add the new associations below
        {
          model: Models.ayah_kandung,
          as: 'ayah_kandung',
        },
        {
          model: Models.ibu_kandung,
          as: 'ibu_kandung',
        },
        {
          model: Models.kesehatan,
          as: 'kesehatan',
        },
        {
          model: Models.pendidikan,
          as: 'pendidikan',
        },
        {
          model: Models.setelah_pendidikan,
          as: 'setelah_pendidikan',
        },
        {
          model: Models.tempat_tinggal,
          as: 'tempat_tinggal',
        },
        {
          model: Models.wali,
          as: 'wali',
        },
        {
          model: Models.hobi_siswa,
          as: 'hobi_siswa',
        },
      ],
      where: {
        id: req.params.id,
      },
    })

    const data = userInstance.get({ plain: true })

    data['status_perkembangan'] = data.perkembangan != null

    return res.json(data)
  } catch (ex) {
    if (ex) console.log(ex)
    return res.status(500).json({ message: 'Internal server error' })
  }
})

routes.put('/akun/:id', async (req, res) => {
  try {
    const data = await Models.user.findOne({
      where: {
        id: req.params.id,
      },
    })
    if (!data) {
      return res.status(404).json({ message: 'User not found' })
    }

    const updatedUser = await data.update(req.body)

    return res.json(updatedUser)
  } catch (ex) {
    return res.status(400).json({ message: ex })
  }
})

//! HAPUS SISWA UDAH DI HAPUS. DIHARAMKAN. SEGERA DIHAPUS DI UI JIKA MASIH ADA

module.exports = routes
