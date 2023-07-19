const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('node-db', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
