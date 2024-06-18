-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2024 at 03:58 PM
-- Server version: 8.0.32
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_aplikasi_buku_induk`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `username` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `code` varchar(5) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`, `token`, `username`, `code`) VALUES
(2, 'nedynugroho2007@gmail.com', 'nedy_888', 'a9503385-aafc-4268-9d2d-e9a6b4168cae', 'Nedy', NULL),
(3, 'drscity20@gmail.com', 'pass', '1ef576bd-1283-417f-8271-0218aa97ff08', 'user1', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `angkatan`
--

CREATE TABLE `angkatan` (
  `id` int NOT NULL,
  `tahun` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `angkatan`
--

INSERT INTO `angkatan` (`id`, `tahun`) VALUES
(1, 2032),
(2, 2050);

-- --------------------------------------------------------

--
-- Table structure for table `ayah_kandung`
--

CREATE TABLE `ayah_kandung` (
  `id` int NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `tempat_lahir` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `agama` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `kewarganegaraan` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `pendidikan` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `pekerjaan` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `pengeluaran_per_bulan` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `alamat_dan_no_telepon` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `status` enum('masih hidup','meninggal','','') COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ayah_kandung`
--

INSERT INTO `ayah_kandung` (`id`, `nama`, `tempat_lahir`, `tanggal_lahir`, `agama`, `kewarganegaraan`, `pendidikan`, `pekerjaan`, `pengeluaran_per_bulan`, `alamat_dan_no_telepon`, `status`, `user_id`) VALUES
(2, 'Ahmad', 'Bandung', '1978-05-10', 'Islam', 'Indonesia', 'SMA', 'Wiraswasta', '5.000.000', 'Jl. Pahlawan No. 10, Bandung', 'masih hidup', 26),
(3, 'yaus', 'hssu', '2024-05-13', 'bshs', 'bshs', 'hshs', 'bshs', '8454', 'vsgs', 'masih hidup', 30),
(4, 'hafiz nur naufal', 'singosari', '2024-06-17', 'islam', 'jepang', 'smk', 'swasta', '2000000', 'malang', 'masih hidup', 31),
(5, 'hafiz nur naufal', 'singosari', '2024-06-17', 'islam', 'jepang', 'smk', 'swasta', '2000000', 'malang', 'masih hidup', 39),
(6, 'sadasdas', 'dasdasdasd', '2024-06-05', 'dsdas', 'dasda', 'sdasda', 'sdasdas', 'sdasd', 'dsasdasdasdas', 'masih hidup', 40),
(7, 'Ayah Daris', 'London', '2024-06-17', 'Islam', 'Jepang', 'S1', 'Wirausaha', '4000000', 'Bumi Asri Selatan', 'masih hidup', 41);

-- --------------------------------------------------------

--
-- Table structure for table `data_diri`
--

CREATE TABLE `data_diri` (
  `id` int NOT NULL,
  `nama_lengkap` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `nama_panggilan` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `jenis_kelamin` enum('laki-laki','perempuan') COLLATE utf8mb4_general_ci NOT NULL,
  `tempat_lahir` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `agama` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `kewarganegaraan` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `anak_ke` int NOT NULL,
  `jml_saudara_kandung` int DEFAULT NULL,
  `jml_saudara_tiri` int DEFAULT NULL,
  `jml_saudara_angkat` int DEFAULT NULL,
  `kelengkapan_ortu` enum('yatim','piatu','yatim piatu','lengkap') COLLATE utf8mb4_general_ci NOT NULL,
  `bahasa_sehari_hari` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` int NOT NULL,
  `tanggal_lahir` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data_diri`
--

INSERT INTO `data_diri` (`id`, `nama_lengkap`, `nama_panggilan`, `jenis_kelamin`, `tempat_lahir`, `agama`, `kewarganegaraan`, `anak_ke`, `jml_saudara_kandung`, `jml_saudara_tiri`, `jml_saudara_angkat`, `kelengkapan_ortu`, `bahasa_sehari_hari`, `user_id`, `tanggal_lahir`) VALUES
(3, 'Nedy Nugroho', 'Nedy', 'laki-laki', 'Yogyakarta', 'Islam', 'Indonesia', 2, 1, 0, 0, 'lengkap', 'Bahasa Indonesia', 26, '1978-05-10'),
(6, 'gwgs', 'whha', 'laki-laki', '13-05-2024', 'hwha', 'bshs', 94, 1, 1, 1, 'yatim', 'hsha', 30, '2024-05-13'),
(7, 'gilang widya pratama', 'daus', 'perempuan', 'lawang', 'kristen', 'Indonesia', 2, 1, 3, 1, 'lengkap', 'indonesia', 31, '2024-06-20'),
(8, 'gilang widya pratama', 'daus', 'perempuan', 'lawang', 'kristen', 'Indonesia', 2, 1, 3, 1, 'lengkap', 'indonesia', 39, '2024-06-20'),
(9, 'dasdasda', 'sadasdasdas', 'perempuan', 'dasda', 'sdasda', 'sdasdas', 2, 10, 12, 12, 'lengkap', 'asdasdasdasd', 40, '2024-06-20'),
(10, 'Daris Nur Rahmat', 'Daris', 'laki-laki', 'Batu', 'Islam', 'Inggris', 2, 9, 0, 0, 'lengkap', 'Indonesia', 41, '2024-06-12');

-- --------------------------------------------------------

--
-- Table structure for table `hobi_siswa`
--

CREATE TABLE `hobi_siswa` (
  `id` int NOT NULL,
  `kesenian` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `olahraga` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `organisasi` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lain_lain` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hobi_siswa`
--

INSERT INTO `hobi_siswa` (`id`, `kesenian`, `olahraga`, `organisasi`, `lain_lain`, `user_id`) VALUES
(2, 'musik', 'sepak bola', 'OSIS', 'membaca buku', 26),
(3, NULL, NULL, NULL, NULL, 30),
(4, NULL, NULL, NULL, NULL, 31),
(5, NULL, NULL, NULL, NULL, 39),
(6, NULL, NULL, NULL, NULL, 40),
(7, NULL, NULL, NULL, NULL, 41);

-- --------------------------------------------------------

--
-- Table structure for table `ibu_kandung`
--

CREATE TABLE `ibu_kandung` (
  `id` int NOT NULL,
  `nama` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `tempat_lahir` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `agama` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `kewarganegaraan` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `pendidikan` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `pekerjaan` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `pengeluaran_per_bulan` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `alamat_dan_no_telepon` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `status` enum('masih hidup','meninggal','','') COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ibu_kandung`
--

INSERT INTO `ibu_kandung` (`id`, `nama`, `tempat_lahir`, `tanggal_lahir`, `agama`, `kewarganegaraan`, `pendidikan`, `pekerjaan`, `pengeluaran_per_bulan`, `alamat_dan_no_telepon`, `status`, `user_id`) VALUES
(2, 'Siti', 'Yogyakarta', '1979-08-20', 'Islam', 'Indonesia', 'SMA', 'Ibu Rumah Tangga', '3.000.000', 'Jl. Merdeka No. 5, Yogyakarta', 'masih hidup', 26),
(3, 'hshsh', 'nshs', '2024-05-08', 'nshs', 'bshs', 'bshs', 'bshs', '8454', 'vsgs', 'masih hidup', 30),
(4, 'firdaus ', 'suhat', '2024-06-05', 'budha', 'korea', 'smp', 'ibu rumah tangga', '2000000', 'malang', 'masih hidup', 31),
(5, 'firdaus ', 'suhat', '2024-06-05', 'budha', 'korea', 'smp', 'ibu rumah tangga', '2000000', 'malang', 'masih hidup', 39),
(6, 'asadasd', 'asdasdasdasd', '2024-06-13', 'sad', 'asdasd', 'asda', 'sdasd', 'asdas', 'dasdasdas', 'masih hidup', 40),
(7, 'Ibu Daris', 'Jepang', '2024-06-14', 'Islam', 'Belanda', 'S2', 'Ibu Rumah Tangga', '10000000', 'Bumiasri selatan , 08953673872', 'masih hidup', 41);

-- --------------------------------------------------------

--
-- Table structure for table `jurusan`
--

CREATE TABLE `jurusan` (
  `id` int NOT NULL,
  `nama` varchar(100) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jurusan`
--

INSERT INTO `jurusan` (`id`, `nama`) VALUES
(1, 'Rekayasa Perangkat Lunak'),
(2131231319, 'Desain Komunikasi Visual');

-- --------------------------------------------------------

--
-- Table structure for table `kesehatan`
--

CREATE TABLE `kesehatan` (
  `id` int NOT NULL,
  `gol_darah` enum('A','B','O','AB') COLLATE utf8mb4_general_ci DEFAULT NULL,
  `penyakit_pernah_diderita` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `kelainan_jasmani` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tinggi` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `berat_badan` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kesehatan`
--

INSERT INTO `kesehatan` (`id`, `gol_darah`, `penyakit_pernah_diderita`, `kelainan_jasmani`, `tinggi`, `berat_badan`, `user_id`) VALUES
(2, 'B', 'sakit kepala', 'asma', '165 cm', '55 kg', 26),
(3, '', '', '', 'sha', 'hs', 30),
(4, 'B', 'asma', '-', '165', '35', 31),
(5, 'B', 'asma', '-', '165', '35', 39),
(6, 'B', '', '', 'sdas', 'asdsad', 40),
(7, 'B', NULL, NULL, '160 cm', '75 kg', 41);

-- --------------------------------------------------------

--
-- Table structure for table `pendidikan`
--

CREATE TABLE `pendidikan` (
  `id` int NOT NULL,
  `sebelumnya_tamatan_dari` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `sebelumnya_tanggal_dan_ijazah` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `sebelumnya_tanggal_skhun_dan_` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `sebelumnya_lama_belajar` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `pindahan_dari_sekolah` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pindahan_alasan` text COLLATE utf8mb4_general_ci,
  `diterima_di_kelas` int NOT NULL,
  `diterima_di_bidang_keahlian` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `diterima_di_program_keahlian` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `diterima_di_paket_keahlian` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `diterima_tanggal` date NOT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pendidikan`
--

INSERT INTO `pendidikan` (`id`, `sebelumnya_tamatan_dari`, `sebelumnya_tanggal_dan_ijazah`, `sebelumnya_tanggal_skhun_dan_`, `sebelumnya_lama_belajar`, `pindahan_dari_sekolah`, `pindahan_alasan`, `diterima_di_kelas`, `diterima_di_bidang_keahlian`, `diterima_di_program_keahlian`, `diterima_di_paket_keahlian`, `diterima_tanggal`, `user_id`) VALUES
(2, 'SMP Negeri 1', '2009-06-20', '2009-07-10', '3 tahun', 'mts', 'hg', 10, 'Teknik Komputer dan Jaringan', 'Keahlian', 'Paket B', '2024-05-01', 26),
(3, 'svgs', '5446', '8445', 'fsgs', 'gays', 'sgs', 10, 'gw', 'gs', 'gag', '2024-05-01', 30),
(4, 'smpn 1 kalianyar', '1997100', '200', '1`1', 'longor', 'jhgjhg', 1212, 'ASa', 'sASas', 'aSAS', '2024-06-19', 31),
(5, 'smpn 1 kalianyar', '1997100', '200', '1`1', 'longor', 'jhgjhg', 1212, 'ASa', 'sASas', 'aSAS', '2024-06-19', 39),
(6, 'dsasda', 'sdasd', 'asdasd', 'asdasd', NULL, NULL, 10, 'sdsdadasd', 'sadasdas', 'dasdasd', '2024-06-19', 40),
(7, 'SMP', '20 Juni 10, 02301823102', '10 Juli 20019, 981028301231', '10 Tahun', NULL, NULL, 10, 'RPL', 'PPLG', 'Paket B', '2024-06-13', 41);

-- --------------------------------------------------------

--
-- Table structure for table `perkembangan`
--

CREATE TABLE `perkembangan` (
  `id` int NOT NULL,
  `menerima_bea_siswa_tahun_kelas_dari` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `meninggalkan_sekolah_ini_tanggal` date DEFAULT NULL,
  `meninggalkan_sekolah_ini_alasan` text COLLATE utf8mb4_general_ci,
  `akhir_pendidikan_tamat_belajar_lulus_tahun` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `akhir_pendidikan_no_tanggal_ijazah` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `akhir_pendidikan_no_tanggal_skhun` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `perkembangan`
--

INSERT INTO `perkembangan` (`id`, `menerima_bea_siswa_tahun_kelas_dari`, `meninggalkan_sekolah_ini_tanggal`, `meninggalkan_sekolah_ini_alasan`, `akhir_pendidikan_tamat_belajar_lulus_tahun`, `akhir_pendidikan_no_tanggal_ijazah`, `akhir_pendidikan_no_tanggal_skhun`, `user_id`) VALUES
(5, 'sh', '2024-06-04', 'hshs', '2024', 'gaga', 'bsha', 26);

-- --------------------------------------------------------

--
-- Table structure for table `setelah_pendidikan`
--

CREATE TABLE `setelah_pendidikan` (
  `id` int NOT NULL,
  `melanjutkan_ke` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `bekerja_nama_perusahaan` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `bekerja_tanggal_mulai` date DEFAULT NULL,
  `bekerja_penghasilan` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `setelah_pendidikan`
--

INSERT INTO `setelah_pendidikan` (`id`, `melanjutkan_ke`, `bekerja_nama_perusahaan`, `bekerja_tanggal_mulai`, `bekerja_penghasilan`, `user_id`) VALUES
(2, 'Kuliah', 'PT. ABC', '2012-07-15', '7.000.000', 26),
(3, NULL, NULL, NULL, NULL, 30),
(4, NULL, NULL, NULL, NULL, 31),
(5, NULL, NULL, NULL, NULL, 39),
(6, NULL, NULL, NULL, NULL, 40),
(7, NULL, NULL, NULL, NULL, 41);

-- --------------------------------------------------------

--
-- Table structure for table `tempat_tinggal`
--

CREATE TABLE `tempat_tinggal` (
  `id` int NOT NULL,
  `alamat` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `no_telepon` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `tinggal_dengan` enum('ortu','saudara','lainnya','wali') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `jarak_ke_sekolah` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tempat_tinggal`
--

INSERT INTO `tempat_tinggal` (`id`, `alamat`, `no_telepon`, `tinggal_dengan`, `jarak_ke_sekolah`, `user_id`) VALUES
(2, 'Jl. Merdeka No. 5, Yogyakarta', '081234567890', 'ortu', '500 meter', 26),
(3, 'sjjs', '94', 'ortu', 'shsh', 30),
(4, 'jl sumberwaras no 80', '088887787876', 'ortu', '10 km', 31),
(5, 'jl sumberwaras no 80', '088887787876', 'ortu', '10 km', 39),
(6, 'asdasdas', 'dasdadas', 'saudara', 'asdasdasd', 40),
(7, 'jl sumberwaras no 80 ', '088887787876', 'ortu', '11 km ', 41);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `nisn` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `angkatan_id` int NOT NULL,
  `jurusan_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `nisn`, `angkatan_id`, `jurusan_id`) VALUES
(26, '1010/1', 1, 1),
(30, 'bsha', 1, 1),
(31, '0857329977', 1, 1),
(39, '08573299772', 1, 1),
(40, '12312312311', 1, 1),
(41, '123456789', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `wali`
--

CREATE TABLE `wali` (
  `id` int NOT NULL,
  `nama` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tempat_lahir` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `agama` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `kewarganegaraan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pendidikan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pekerjaan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pengeluaran_per_bulan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `alamat_dan_no_telepon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wali`
--

INSERT INTO `wali` (`id`, `nama`, `tempat_lahir`, `tanggal_lahir`, `agama`, `kewarganegaraan`, `pendidikan`, `pekerjaan`, `pengeluaran_per_bulan`, `alamat_dan_no_telepon`, `user_id`) VALUES
(2, 'Ali', 'Yogyakarta', '1975-03-25', 'Islam', 'Indonesia', 'S1', 'Karyawan Swasta', '6.000.000', 'Jl. Merdeka No. 10, Yogyakarta', 26),
(3, 'gsgs', 'bsgs', '2024-05-01', 'vsbs', 'bsh', 'bshs', 'bsh', '15', 'aha', 30),
(4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 31),
(5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 39),
(6, 'sdasddasd', 'dasdasdasda', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 40),
(7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 41);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`email`);

--
-- Indexes for table `angkatan`
--
ALTER TABLE `angkatan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ayah_kandung`
--
ALTER TABLE `ayah_kandung`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_fk_keterangan_ayah_kandung` (`user_id`);

--
-- Indexes for table `data_diri`
--
ALTER TABLE `data_diri`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_fk_keterangan_data_diri` (`user_id`);

--
-- Indexes for table `hobi_siswa`
--
ALTER TABLE `hobi_siswa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_fk_keterangan_hobi_siswa` (`user_id`);

--
-- Indexes for table `ibu_kandung`
--
ALTER TABLE `ibu_kandung`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_fk_keterangan_ibu_kandung` (`user_id`);

--
-- Indexes for table `jurusan`
--
ALTER TABLE `jurusan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kesehatan`
--
ALTER TABLE `kesehatan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_fk_keterangan_kesehatan` (`user_id`);

--
-- Indexes for table `pendidikan`
--
ALTER TABLE `pendidikan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_fk_keterangan_pendidikan` (`user_id`);

--
-- Indexes for table `perkembangan`
--
ALTER TABLE `perkembangan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_fk_keterangan_perkembangan` (`user_id`);

--
-- Indexes for table `setelah_pendidikan`
--
ALTER TABLE `setelah_pendidikan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_fk_keterangan_setelah_pendidikan` (`user_id`);

--
-- Indexes for table `tempat_tinggal`
--
ALTER TABLE `tempat_tinggal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_fk_keterangan_tempat_tinggal` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nisn` (`nisn`),
  ADD KEY `angkatan_user` (`angkatan_id`),
  ADD KEY `jurusan_user` (`jurusan_id`);

--
-- Indexes for table `wali`
--
ALTER TABLE `wali`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_fk_keterangan_wali` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `angkatan`
--
ALTER TABLE `angkatan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2131231320;

--
-- AUTO_INCREMENT for table `ayah_kandung`
--
ALTER TABLE `ayah_kandung`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `data_diri`
--
ALTER TABLE `data_diri`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `hobi_siswa`
--
ALTER TABLE `hobi_siswa`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `ibu_kandung`
--
ALTER TABLE `ibu_kandung`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `jurusan`
--
ALTER TABLE `jurusan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2131231323;

--
-- AUTO_INCREMENT for table `kesehatan`
--
ALTER TABLE `kesehatan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `pendidikan`
--
ALTER TABLE `pendidikan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `perkembangan`
--
ALTER TABLE `perkembangan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `setelah_pendidikan`
--
ALTER TABLE `setelah_pendidikan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tempat_tinggal`
--
ALTER TABLE `tempat_tinggal`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `wali`
--
ALTER TABLE `wali`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ayah_kandung`
--
ALTER TABLE `ayah_kandung`
  ADD CONSTRAINT `user_fk_keterangan_ayah_kandung` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `data_diri`
--
ALTER TABLE `data_diri`
  ADD CONSTRAINT `user_fk_keterangan_data_diri` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hobi_siswa`
--
ALTER TABLE `hobi_siswa`
  ADD CONSTRAINT `user_fk_keterangan_hobi_siswa` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ibu_kandung`
--
ALTER TABLE `ibu_kandung`
  ADD CONSTRAINT `user_fk_keterangan_ibu_kandung` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `kesehatan`
--
ALTER TABLE `kesehatan`
  ADD CONSTRAINT `user_fk_keterangan_kesehatan` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pendidikan`
--
ALTER TABLE `pendidikan`
  ADD CONSTRAINT `user_fk_keterangan_pendidikan` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `perkembangan`
--
ALTER TABLE `perkembangan`
  ADD CONSTRAINT `user_fk_keterangan_perkembangan` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `setelah_pendidikan`
--
ALTER TABLE `setelah_pendidikan`
  ADD CONSTRAINT `user_fk_keterangan_setelah_pendidikan` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tempat_tinggal`
--
ALTER TABLE `tempat_tinggal`
  ADD CONSTRAINT `user_fk_keterangan_tempat_tinggal` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `angkatan_user` FOREIGN KEY (`angkatan_id`) REFERENCES `angkatan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `jurusan_user` FOREIGN KEY (`jurusan_id`) REFERENCES `jurusan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `wali`
--
ALTER TABLE `wali`
  ADD CONSTRAINT `user_fk_keterangan_wali` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
