const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'mapel',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            nama: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: 'mapel',
            },
        },
        {
            sequelize,
            tableName: 'tahun_pelajaran',
            timestamps: false,
        }
    )
}
