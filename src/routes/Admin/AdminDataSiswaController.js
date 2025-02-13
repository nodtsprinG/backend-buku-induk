/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                 D A T A  S I S W A
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

? Bagian ini isinya api untuk memanipulasi Data siswa
! Dimohon memberikan note atau komentar pada bagian bagian route agar mempermudah development

*/

const { Router } = require('express')
const { Models } = require('../../models')

const router = Router()

/**
 * PUT /admin/data-diri/:id
 * @summary Mengubah data diri siswa berdasarkan ID siswa
 * @tags admin
 * @param {integer} id.path.required - ID siswa yang datanya ingin diubah
 * @param {object} request.body.required - Data diri yang ingin diperbarui
 * @param {object} request.body.ayah_kandung.required - Data ayah kandung siswa
 * @param {object} request.body.ibu_kandung.required - Data ibu kandung siswa
 * @param {object} request.body.data_diri.required - Data diri siswa (seperti nama, alamat, dll.)
 * @param {object} request.body.hobi.required - Data hobi siswa
 * @param {object} request.body.kesehatan.required - Data kesehatan siswa
 * @param {object} request.body.pendidikan.required - Data pendidikan siswa
 * @param {object} request.body.perkembangan.required - Data perkembangan siswa
 * @param {object} request.body.setelah_pendidikan.required - Data setelah pendidikan siswa
 * @param {object} request.body.tempat_tinggal.required - Data tempat tinggal siswa
 * @param {object} request.body.wali.required - Data wali siswa
 * @return {object} 200 - Data berhasil diperbarui - application/json
 * @return {object} 500 - Terjadi kesalahan saat memperbarui data - application/json
 * @example response - 200 - Data berhasil diperbarui
 * {
 *   "message": "Data updated successfully"
 * }
 * @example response - 500 - Terjadi kesalahan pada server
 * {
 *   "error": "An error occurred while updating the data"
 * }
 */
router.put('/admin/data-diri/:id', async (req, res) => {
  const user_id = req.params.id
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

/**
 * GET /admin/dashboard
 * @summary Mengambil statistik dashboard admin yang mencakup jumlah siswa dan data terkait jenis kelamin serta data terinput
 * @tags admin
 * @return {object} 200 - Berhasil mengambil statistik - application/json
 * @return {object} 500 - Terjadi kesalahan pada server - application/json
 * @example response - 200 - Berhasil mengambil statistik
 * {
 *   "count_datainputed": 500,
 *   "count_laki": 300,
 *   "count_perempuan": 200,
 *   "count_siswa": 500
 * }
 * @example response - 500 - Terjadi kesalahan pada server
 * {
 *   "error": "Internal server error"
 * }
 */
router.get('/admin/dashboard', async (req, res) => {
  const count_siswa = await Models.user.count()
  const count_laki = await Models.data_diri.count({
    where: {
      jenis_kelamin: 'laki-laki',
    },
  })

  const count_perempuan = await Models.data_diri.count({
    where: {
      jenis_kelamin: 'perempuan',
    },
  })

  const count_datainputed = await Models.data_diri.count()

  res.status(200).json({
    count_datainputed,
    count_laki,
    count_perempuan,
    count_siswa,
  })
})

module.exports = router
