const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('keterangan_perkembangan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    menerima_bea_siswa_tahun_kelas_dari: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meninggalkan_sekolah_ini_tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    meninggalkan_sekolah_ini_alasan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    akhir_pendidikan_tamat_belajar_lulus_tahun: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    akhir_pendidikan_no_tanggal_ijazah: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    akhir_pendidikan_no_tanggal_skhun: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'keterangan_perkembangan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user_fk_keterangan_perkembangan",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
