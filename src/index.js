const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

require('dotenv').config()

const app = express()

//* Route admin
const authControllers = require('./routes/AuthController')
const userControllers = require('./routes/UserControllers')
const akunControllers = require('./routes/Admin/AdminAccountController')
const dataSiswaController = require('./routes/Admin/AdminDataSiswaController')
const jurusanController = require('./routes/Admin/AdminJurusan')
const angkatanController = require('./routes/Admin/AdminAngkatan')
const mapelController = require('./routes/Admin/AdminMapel')
const nilaiController = require('./routes/Admin/AdminNilaiSiswa')
const tahunpelajaranController = require('./routes/Admin/AdminTahunPelajaran')
const getExport = require('./routes/Admin/AdminExport')

//* Route siswa
const ubahDataController = require('./routes/Siswa/SiswaUbahData')

// middleware
const {
  AuthMiddlewareSiswa,
  AuthMiddlewareAdmin,
} = require('./middleware/AuthMiddleware')
const morgan = require('morgan')
const { Models } = require('./models')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/auth', authControllers)

app.use('/siswa', userControllers)

// ----- Admin
app.use('/admin', AuthMiddlewareAdmin, akunControllers)
app.use('/admin', AuthMiddlewareAdmin, dataSiswaController)
app.use('/admin', AuthMiddlewareAdmin, jurusanController)
app.use('/admin', AuthMiddlewareAdmin, angkatanController)
app.use('/admin', AuthMiddlewareAdmin, getExport)
app.use('/admin', AuthMiddlewareAdmin, tahunpelajaranController)
app.use('/admin', AuthMiddlewareAdmin, mapelController)
app.use('/admin', AuthMiddlewareAdmin, nilaiController)

// ------ Siswa
app.use('/siswa', AuthMiddlewareSiswa, ubahDataController)

app.get('/view-pdf/:id', async (req, res) => {
  const { jurusan, angkatan, search } = req.query
  const { id } = req.params
  let data = await Models.user.findOne({
    where: { id: id },
    include: [
      {
        model: Models.jurusan,
        as: 'jurusan',
        attributes: ['id'],
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
  })

  res.render('export-pdf', { element: data })
})

app.listen(8080, async () => {
  console.log('App listen on port 8080')
})
