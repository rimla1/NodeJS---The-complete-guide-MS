const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'punim11godina', {
    dialect: 'mysql', 
    host: 'localhost'
})

module.exports = sequelize