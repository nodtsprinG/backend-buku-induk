const { Sequelize } = require('sequelize')
const initModels = require('./init-models')
const config = require('./../config/config.json')

module.exports = {
  Models: initModels(
    new Sequelize({
      ...config.development,
      logging: false,
    })
  ),
}
