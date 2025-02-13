/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                N I L A I   S I S W A
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

? Bagian ini isinya api untuk memanipulasi nilai siswa
! Dimohon memberikan note atau komentar pada bagian bagian route agar mempermudah development

*/

const { Router } = require('express')
const { Models } = require('../../models')

const router = Router()
const tahun_pelajaran = Models.tahun_pelajaran

/**
 * POST /admin/tahun_pelajaran
 * @summary Menambahkan data tahun pelajaran baru
 * @tags admin
 * @param {TahunPelajaran} request.body.required - Data tahun pelajaran yang akan ditambahkan
 * @return {object} 201 - Data tahun pelajaran berhasil ditambahkan - application/json
 * @return {object} 400 - Terjadi kesalahan dalam permintaan - application/json
 * @example response - 201 - Tahun pelajaran berhasil ditambahkan
 * {
 *   "id": 1,
 *   "nama": "2025/2026"
 * }
 * @example response - 400 - Kesalahan dalam permintaan
 * {
 *   "error": "Error message"
 * }
 */
router.post('/tahun_pelajaran', async (req, res) => {
    try {
        const newTahun_pelajaran = await tahun_pelajaran.create(req.body)
        res.status(201).json(newTahun_pelajaran)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

/**
 * GET /admin/tahun_pelajaran
 * @summary Mengambil seluruh data tahun pelajaran
 * @tags admin
 * @return {array<TahunPelajaran>} 200 - Daftar tahun pelajaran - application/json
 */
router.get('/tahun_pelajaran', async (req, res) => {
    try {
        const allTahun_pelajaran = await tahun_pelajaran.findAll()
        res.status(200).json(allTahun_pelajaran)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


/**
 * GET /admin/tahun_pelajaran/{id}
 * @summary Mengambil data tahun pelajaran berdasarkan ID
 * @tags admin
 * @param {string} id.path.required - ID dari tahun pelajaran yang ingin diambil
 * @return {object} 200 - Tahun pelajaran ditemukan - application/json
 * @return {object} 404 - Tahun pelajaran tidak ditemukan - application/json
 * @return {object} 500 - Terjadi kesalahan pada server - application/json
 * @example response - 200 - Tahun pelajaran ditemukan
 * {
 *   "id": 1,
 *   "nama": "2025/2026"
 * }
 * @example response - 404 - Tahun pelajaran tidak ditemukan
 * {
 *   "error": "Tahun pelajaran not found"
 * }
 * @example response - 500 - Kesalahan pada server
 * {
 *   "error": "Internal server error"
 * }
 */
router.get('/tahun_pelajaran/:id', async (req, res) => {
    try {
        const oneTahun_pelajaran = await tahun_pelajaran.findByPk(req.params.id)
        if (oneTahun_pelajaran) {
            res.status(200).json(oneTahun_pelajaran)
        } else {
            res.status(404).json({ error: 'Tahun pelajaran not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


/**
 * PUT /admin/tahun_pelajaran/{id}
 * @summary Memperbarui data tahun pelajaran berdasarkan ID
 * @tags admin
 * @param {string} id.path.required - ID dari tahun pelajaran yang akan diperbarui
 * @param {TahunPelajaran} request.body.required - Data tahun pelajaran yang akan diperbarui
 * @param {string} request.body.nama - Nama tahun pelajaran
 * @return {object} 200 - Tahun pelajaran berhasil diperbarui - application/json
 * @return {object} 404 - Tahun pelajaran tidak ditemukan - application/json
 * @return {object} 500 - Terjadi kesalahan saat memperbarui data - application/json
 * @example response - 200 - Tahun pelajaran berhasil diperbarui
 * {
 *   "message": "Tahun pelajaran updated successfully"
 * }
 * @example response - 404 - Tahun pelajaran tidak ditemukan
 * {
 *   "error": "Tahun pelajaran not found"
 * }
 * @example response - 500 - Kesalahan saat memperbarui data
 * {
 *   "error": "Internal server error"
 * }
 */
router.put('/tahun_pelajaran/:id', async (req, res) => {
    try {
        const updatedTahun_pelajaran = await tahun_pelajaran.update(req.body, {
            where: { id: req.params.id },
        })
        if (updatedTahun_pelajaran) {
            res.status(200).json({ message: 'Tahun pelajaran updated successfully' })
        } else {
            res.status(404).json({ error: 'Tahun pelajaran not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router
