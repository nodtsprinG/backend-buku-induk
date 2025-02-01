const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'pendidikan',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            sebelumnya_tamatan_dari: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            sebelumnya_tanggal_dan_ijazah: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            sebelumnya_tanggal_skhun_dan_: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            sebelumnya_lama_belajar: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            pindahan_dari_sekolah: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            pindahan_alasan: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            diterima_di_kelas: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            diterima_di_bidang_keahlian: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            diterima_di_program_keahlian: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            diterima_di_paket_keahlian: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            diterima_tanggal: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            tableName: 'pendidikan',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'user_fk_keterangan_pendidikan',
                    using: 'BTREE',
                    fields: [{ name: 'user_id' }],
                },
            ],
        }
    )
}
