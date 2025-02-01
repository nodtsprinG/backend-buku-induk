const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'data_diri',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            nama_lengkap: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            nama_panggilan: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            jenis_kelamin: {
                type: DataTypes.ENUM('laki-laki', 'perempuan'),
                allowNull: false,
            },
            tempat_lahir: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            agama: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            kewarganegaraan: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            anak_ke: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            jml_saudara_kandung: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            jml_saudara_tiri: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            jml_saudara_angkat: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            kelengkapan_ortu: {
                type: DataTypes.ENUM(
                    'yatim',
                    'piatu',
                    'yatim piatu',
                    'lengkap'
                ),
                allowNull: false,
            },
            bahasa_sehari_hari: {
                type: DataTypes.STRING(255),
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
            tanggal_lahir: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: 'data_diri',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'user_fk_keterangan_data_diri',
                    using: 'BTREE',
                    fields: [{ name: 'user_id' }],
                },
            ],
        }
    )
}
