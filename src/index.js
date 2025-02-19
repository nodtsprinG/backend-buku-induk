/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const expressJSDocSwagger = require('express-jsdoc-swagger')
const package = require('../package.json')

require('dotenv').config()

const app = express()

//* Route admin
const authControllers = require('./routes/AuthController')
const userControllers = require('./routes/Siswa/SiswaSpesificData')
const akunControllers = require('./routes/Admin/AdminAccountController')
const dataSiswaController = require('./routes/Admin/AdminDataSiswaController')
const jurusanController = require('./routes/Admin/AdminJurusan')
const angkatanController = require('./routes/Admin/AdminAngkatan')
const mapelController = require('./routes/Admin/AdminMapel')
const nilaiController = require('./routes/Admin/AdminNilaiSiswa')
const tahunpelajaranController = require('./routes/Admin/AdminTahunPelajaran')
const getExport = require('./routes/Admin/AdminExport')

<<<<<<< HEAD
const nilaiController = require('./routes/Admin/AdminNilaiSiswa')
const mapelController = require('./routes/Admin/AdminMapel')

=======
>>>>>>> 6289d77650a35b0c98e5af546a2894a4660a3f06
//* Route siswa
const daftarDataController = require("./routes/Siswa/SiswaDaftar")
const ubahDataController = require('./routes/Siswa/SiswaDataDiri')

//* DEV MODE

if (process.env.NODE_ENV === 'development') {
  console.log('Mode Pengembangan, Anda dapat membuka dokumentasi di /api-docs')

  const options = {
    info: {
      version: package.version,
      title: 'Buku Induk',
      description:
        'Aplikasi Buku Induk untuk melakukan pencatatan data siswa, jurusan, angkatan dan lainnya. API Ini dibangun diatas Nodejs dengan sistem autentikasi bearer. Gunakan API ini sebaik mungkin',
      license: {
        name: 'MIT',
      },
    },
    security: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
    baseDir: __dirname,
    filesPattern: './**/*.js',
  }

  expressJSDocSwagger(app)(options)
} else {
  console.log('Mode Produksi')
}

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
<<<<<<< HEAD

app.use('/admin', AuthMiddlewareAdmin, nilaiController)
=======
>>>>>>> 6289d77650a35b0c98e5af546a2894a4660a3f06
app.use('/admin', AuthMiddlewareAdmin, mapelController)
app.use('/admin', AuthMiddlewareAdmin, nilaiController)

// ------ Siswa
app.use('/siswa', daftarDataController)
app.use('/siswa', AuthMiddlewareSiswa, ubahDataController)

// app.use("/", )

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

app.get('/view-pdf', async (req, res) => {
  const { jurusan, angkatan, search } = req.query
  const { id } = req.params
  let data = await Models.user.findAll({
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
  })

  res.render('export-pdf-bulk', { elements: data })
})

app.get('/view-raport', async (req, res) => {
  res.render('export-halaman-belakang')
})
const XLSX = require('xlsx')
const upload = require('./middleware/upload')

app.post('/import-excel', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' })
    }

    // Read the Excel file
<<<<<<< HEAD
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' })
    const sheetName = workbook.SheetNames[0] // Get first sheet
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
=======
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0]; // Get first sheet
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    console.log(data)
>>>>>>> 6289d77650a35b0c98e5af546a2894a4660a3f06

    // Process each row
    for (const row of data) {
      const siswa = {
        nisn: row.NISN,
        angkatan_id: row['Angkatan Tahun'],
        jurusan_id: row.Jurusan,
      }

      const existingUser = await Models.user.findOne({
        where: { nisn: siswa.nisn },
      })
      if (existingUser) {
        console.log(`Skipping duplicate NISN: ${siswa.nisn}`)
        continue
      }

      const newUser = await Models.user.create(siswa)

      console.log("creating")

      await Models.data_diri.create({
        user_id: newUser.id,
        nama_lengkap: row['Nama Lengkap'],
        nama_panggilan: row['Nama Panggilan'],
        jenis_kelamin: row['Jenis Kelamin'],
        tempat_lahir: row['Tempat Lahir'],
        tanggal_lahir: row['Tanggal Lahir'],
        agama: row.Agama,
        kewarganegaraan: row.Kewarganegaraan,
        anak_ke: row['Anak Ke'],
        jml_saudara_kandung: row['Jumlah Saudara Kandung'],
        jml_saudara_tiri: row['Jumlah Saudara Tiri'],
        jml_saudara_angkat: row['Jumlah Saudara Angkat'],
        kelengkapan_ortu: row['Kelengkapan Ortu'],
        bahasa_sehari_hari: row['Bahasa Sehari-hari'],
      })

      console.log("creating")


      await Models.perkembangan.create({
        user_id: newUser.id,
        menerima_bea_siswa_tahun_kelas_dari:
          row['Menerima Bea Siswa Tahun Kelas Dari'],
        meninggalkan_sekolah_ini_tanggal:
          row['Meninggalkan Sekolah Ini Tanggal'],
        meninggalkan_sekolah_ini_alasan: row['Meninggalkan Sekolah Ini Alasan'],
<<<<<<< HEAD
        akhir_pendidikan_tamat_belajar_lulus_tahun:
          row['Akhir Pendidikan Tamat Belajar Lulus Tahun'],
        akhir_pendidikan_no_tanggal_ijazah:
          row['Akhir Pendidikan No/Tanggal Ijazah'],
        akhir_pendidikan_no_tanggal_skhun:
          row['Akhir Pendidikan No/Tanggal SKHUN'],
      })
=======
        akhir_pendidikan_tamat_belajar_lulus_tahun: row['Akhir Pendidikan Tamat Belajar Lulus Tahun'],
        akhir_pendidikan_no_tanggal_ijazah: row['Akhir Pendidikan No/Tanggal Ijazah'],
        akhir_pendidikan_no_tanggal_skhun: row['Akhir Pendidikan No/Tanggal SKHUN'],
      });
      console.log("creating")

>>>>>>> 6289d77650a35b0c98e5af546a2894a4660a3f06

      await Models.ayah_kandung.create({
        user_id: newUser.id,
        nama: row['Nama Ayah'],
        tempat_lahir: row['Tempat Lahir Ayah'],
        tanggal_lahir: row['Tanggal Lahir Ayah'],
        agama: row['Agama Ayah'],
        kewarganegaraan: row['Kewarganegaraan Ayah'],
        pendidikan: row['Pendidikan Ayah'],
        pekerjaan: row['Pekerjaan Ayah'],
        pengeluaran_per_bulan: row['Pengeluaran per Bulan Ayah'],
        alamat_dan_no_telepon: row['Alamat dan No. Telepon Ayah'],
        status: row['Status Ayah'],
<<<<<<< HEAD
      })
=======
      });
      console.log("creating")

>>>>>>> 6289d77650a35b0c98e5af546a2894a4660a3f06

      await Models.ibu_kandung.create({
        user_id: newUser.id,
        nama: row['Nama Ibu'],
        tempat_lahir: row['Tempat Lahir Ibu'],
        tanggal_lahir: row['Tanggal Lahir Ibu'],
        agama: row['Agama Ibu'],
        kewarganegaraan: row['Kewarganegaraan Ibu'],
        pendidikan: row['Pendidikan Ibu'],
        pekerjaan: row['Pekerjaan Ibu'],
        pengeluaran_per_bulan: row['Pengeluaran per Bulan Ibu'],
        alamat_dan_no_telepon: row['Alamat dan No. Telepon Ibu'],
        status: row['Status Ibu'],
<<<<<<< HEAD
      })
=======
      });
      console.log("creating")

>>>>>>> 6289d77650a35b0c98e5af546a2894a4660a3f06

      await Models.kesehatan.create({
        user_id: newUser.id,
        gol_darah: row['Golongan Darah'],
        penyakit_pernah_diderita: row['Penyakit Pernah Diderita'],
        kelainan_jasmani: row['Kelainan Jasmani'],
        tinggi: row.Tinggi,
        berat_badan: row['Berat Badan'],
<<<<<<< HEAD
      })
=======
      });
      console.log("creating")

>>>>>>> 6289d77650a35b0c98e5af546a2894a4660a3f06

      await Models.wali.create({
        user_id: newUser.id,
        nama: row['Nama Wali'],
        tempat_lahir: row['Tempat Lahir Wali'],
        tanggal_lahir: row['Tanggal Lahir Wali'],
        agama: row['Agama Wali'],
        kewarganegaraan: row['Kewarganegaraan Wali'],
        pendidikan: row['Pendidikan Wali'],
        pekerjaan: row['Pekerjaan Wali'],
        pengeluaran_per_bulan: row['Pengeluaran per Bulan Wali'],
        alamat_dan_no_telepon: row['Alamat dan No. Telepon Wali'],
<<<<<<< HEAD
      })
=======
      });
      console.log("creating")

>>>>>>> 6289d77650a35b0c98e5af546a2894a4660a3f06

      await Models.hobi_siswa.create({
        user_id: newUser.id,
        kesenian: row.Kesenian,
        olahraga: row.Olahraga,
        organisasi: row.Organisasi,
        lain_lain: row['Lain-lain'],
<<<<<<< HEAD
      })
=======
      });
      console.log("creating")

>>>>>>> 6289d77650a35b0c98e5af546a2894a4660a3f06

      await Models.pendidikan.create({
        user_id: newUser.id,
        sebelumnya_tamatan_dari: row['Sebelumnya Tamatan Dari'],
        sebelumnya_tanggal_dan_ijazah: row['Sebelumnya Tanggal dan Ijazah'],
        sebelumnya_tanggal_skhun_dan_: row['Sebelumnya Tanggal SKHUN'],
        sebelumnya_lama_belajar: row['Sebelumnya Lama Belajar'],
        diterima_di_kelas: row['Diterima di Kelas'],
        diterima_di_bidang_keahlian: row['Diterima di Bidang Keahlian'],
        diterima_di_program_keahlian: row['Diterima di Program Keahlian'],
        diterima_di_paket_keahlian: row['Diterima di Paket Keahlian'],
        diterima_tanggal: row['Diterima Tanggal'],
<<<<<<< HEAD
        user_id: newUser.id,
      })
=======
      });
      console.log("creating")

>>>>>>> 6289d77650a35b0c98e5af546a2894a4660a3f06

      await Models.tempat_tinggal.create({
        user_id: newUser.id,
        alamat: row['Alamat Tempat Tinggal'],
        no_telepon: row['No. Telepon Tempat Tinggal'],
        tinggal_dengan: row['Tinggal Dengan'],
        jarak_ke_sekolah: row['Jarak ke Sekolah'],
      })

      await Models.setelah_pendidikan.create({
        user_id: newUser.id,
        melanjutkan_ke: row['Melanjutkan Ke'],
      })
    }

    res.status(201).json({ message: 'Excel data imported successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

app.listen(8080, async () => {
  console.log('App listen on port 8080')
})
