/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                        U B A H  D A T A  S I S W A
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

? Bagian ini isinya api untuk memanipulasi data siswa
! Dimohon memberikan note atau komentar pada bagian bagian route agar mempermudah development

*/

const { Router } = require('express')
const { Models } = require('../../models')

const router = Router()

//! Belum ditest
router.get('/data-diri', async (req, res) => {
  try {
    const user = await Models.user.findOne({
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
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

//! Belum ditest
router.put('/data-diri', async (req, res) => {
  const user_id = req.user_id
  const {
    ayah_kandung,
    ibu_kandung,
    data_diri,
    hobi,
    kesehatan,
    pendidikan,
    perkembangan,
    setelah_pendidikan,
    tempat_tinggal,
    wali,
  } = req.body

  try {
    await Models.ayah_kandung.update(ayah_kandung, { where: { user_id } })
    await Models.ibu_kandung.update(ibu_kandung, { where: { user_id } })
    await Models.data_diri.update(data_diri, { where: { user_id } })
    await Models.hobi_siswa.update(hobi, { where: { user_id } })
    await Models.kesehatan.update(kesehatan, { where: { user_id } })
    await Models.pendidikan.update(pendidikan, { where: { user_id } })
    await Models.perkembangan.update(perkembangan, { where: { user_id } })
    await Models.setelah_pendidikan.update(setelah_pendidikan, {
      where: { user_id },
    })
    await Models.tempat_tinggal.update(tempat_tinggal, {
      where: { user_id },
    })
    await Models.wali.update(wali, { where: { user_id } })

    return res.json({ message: 'Data updated successfully' })
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .json({ error: 'An error occurred while updating the data' })
  }
})

module.exports = router
