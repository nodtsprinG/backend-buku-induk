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
router.put('/data-diri/:id', async (req, res) => {
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
