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

/**
 * POST /siswa/data-diri
 * @summary Menambahkan data diri siswa beserta informasi terkait lainnya
 * @tags siswa
 * @param {object} request.body.required - Data yang akan ditambahkan
 * @param {object} request.body.data_diri - Data diri siswa
 * @param {object} request.body.hobi - Data hobi siswa
 * @param {object} request.body.ayah_kandung - Data ayah kandung siswa
 * @param {object} request.body.ibu_kandung - Data ibu kandung siswa
 * @param {object} request.body.kesehatan - Data kesehatan siswa
 * @param {object} request.body.pendidikan - Data pendidikan siswa
 * @param {object} request.body.setelah_pendidikan - Data setelah pendidikan siswa
 * @param {object} request.body.tempat_tinggal - Data tempat tinggal siswa
 * @param {object} request.body.wali - Data wali siswa
 * @param {object} request.body.siswa - Data siswa (termasuk NISN dan informasi lainnya)
 * @return {object} 201 - Data berhasil dibuat - application/json
 * @return {object} 400 - NISN sudah terpakai - application/json
 * @return {object} 500 - Terjadi kesalahan pada server - application/json
 * @example response - 201 - Data berhasil dibuat
 * {
 *   "message": "Data successfully created",
 *   "data": {
 *     "data_diri": { ... },
 *     "hobi": { ... },
 *     "ayah_kandung": { ... },
 *     "ibu_kandung": { ... },
 *     "kesehatan": { ... },
 *     "pendidikan": { ... },
 *     "setelah_pendidikan": { ... },
 *     "tempat_tinggal": { ... },
 *     "wali": { ... },
 *     "siswa": { ... }
 *   }
 * }
 * @example response - 400 - NISN sudah terpakai
 * {
 *   "message": "NISN sudah terpakai"
 * }
 * @example response - 500 - Kesalahan pada server
 * {
 *   "message": "Internal server error"
 * }
 */
router.post('/data-diri', async (req, res) => {
  try {
    const {
      data_diri,
      hobi,
      ayah_kandung,
      ibu_kandung,
      kesehatan,
      pendidikan,
      setelah_pendidikan,
      tempat_tinggal,
      wali,
      siswa,
    } = req.body

    // Create the user
    const user = await Models.user.create(siswa)

    // Create related entities
    await Models.data_diri.create({ ...data_diri, user_id: user.id })
    await Models.hobi_siswa.create({ ...hobi, user_id: user.id })
    await Models.ayah_kandung.create({ ...ayah_kandung, user_id: user.id })
    await Models.ibu_kandung.create({ ...ibu_kandung, user_id: user.id })
    await Models.kesehatan.create({ ...kesehatan, user_id: user.id })
    await Models.pendidikan.create({ ...pendidikan, user_id: user.id })
    await Models.setelah_pendidikan.create({
      ...setelah_pendidikan,
      user_id: user.id,
    })
    await Models.tempat_tinggal.create({
      ...tempat_tinggal,
      user_id: user.id,
    })

    await Models.wali.create({ ...wali, user_id: user.id })

    res.status(201).json({
      message: 'Data successfully created',
      data: req.body,
    })
  } catch (error) {
    if (error instanceof Sequelize.UniqueConstraintError) {
      res.status(400).json({ message: 'NISN sudah terpakai' })
    } else {
      // Handle other types of errors
      console.log(error)
      res.status(500).json({ message: 'Internal server error' })
    }
    await Models.user.destroy({
      where: {
        nisn: req.body.siswa.nisn,
      },
    })
  }
})

/**
 * GET /siswa/data-diri
 * @summary Mengambil data diri lengkap siswa beserta informasi terkait lainnya
 * @tags siswa
 * @param {string} user_id.query.required - ID pengguna yang data dirinya ingin diambil
 * @return {object} 200 - Data diri siswa beserta informasi terkait ditemukan - application/json
 * @return {object} 500 - Terjadi kesalahan pada server - application/json
 * @example response - 200 - Data diri siswa ditemukan
 * {
 *   "id": 1,
 *   "nama": "John Doe",
 *   "jurusan": {
 *     "nama": "Teknik Informatika"
 *   },
 *   "angkatan": {
 *     "tahun": "2024"
 *   },
 *   "data_diri": { ... },
 *   "perkembangan": { ... },
 *   "ayah_kandung": { ... },
 *   "ibu_kandung": { ... },
 *   "kesehatan": { ... },
 *   "pendidikan": { ... },
 *   "setelah_pendidikan": { ... },
 *   "tempat_tinggal": { ... },
 *   "wali": { ... },
 *   "hobi_siswa": { ... }
 * }
 * @example response - 500 - Kesalahan pada server
 * {
 *   "error": "Internal server error"
 * }
 */
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
        id: req.user_id,
      },
    })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

/**
 * GET /siswa/data-diri/:id
 * @summary Mengambil data diri siswa berdasarkan ID pengguna
 * @tags siswa
 * @param {string} id.path.required - ID pengguna yang data dirinya ingin diambil
 * @return {object} 200 - Data diri siswa ditemukan - application/json
 * @return {object} 404 - Data diri siswa tidak ditemukan - application/json
 * @return {object} 500 - Terjadi kesalahan pada server - application/json
 * @example response - 200 - Data diri siswa ditemukan
 * {
 *   "id": 1,
 *   "nama": "John Doe",
 *   "alamat": "Jl. Contoh No. 1",
 *   "tanggal_lahir": "2000-01-01"
 * }
 * @example response - 404 - Data diri siswa tidak ditemukan
 * {
 *   "error": "Data diri tidak ditemukan"
 * }
 * @example response - 500 - Kesalahan pada server
 * {
 *   "error": "Internal server error"
 * }
 */
router.get('/data-diri/:id', async (req, res) => {
  try {
    const data = await Models.data_diri.findOne({
      where: {
        user_id: req.params.id,
      },
      attributes: {
        exclude: ['user_id'],
      },
    })
    
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(404).json({ error: 'Data diri tidak ditemukan' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

/**
 * PUT /siswa/data-diri
 * @summary Memperbarui data diri siswa
 * @tags siswa
 * @param {object} request.body.required - Data yang akan diperbarui
 * @param {object} request.body.ayah_kandung - Informasi ayah kandung siswa
 * @param {object} request.body.ibu_kandung - Informasi ibu kandung siswa
 * @param {object} request.body.data_diri - Informasi umum data diri siswa
 * @param {object} request.body.hobi - Informasi hobi siswa
 * @param {object} request.body.kesehatan - Informasi kesehatan siswa
 * @param {object} request.body.pendidikan - Informasi pendidikan siswa
 * @param {object} request.body.perkembangan - Informasi perkembangan siswa
 * @param {object} request.body.setelah_pendidikan - Informasi setelah pendidikan siswa
 * @param {object} request.body.tempat_tinggal - Informasi tempat tinggal siswa
 * @param {object} request.body.wali - Informasi wali siswa
 * @return {object} 200 - Data berhasil diperbarui - application/json
 * @return {object} 500 - Terjadi kesalahan saat memperbarui data - application/json
 * @example response - 200 - Data berhasil diperbarui
 * {
 *   "message": "Data updated successfully"
 * }
 * @example response - 500 - Kesalahan saat memperbarui data
 * {
 *   "error": "An error occurred while updating the data"
 * }
 */
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
