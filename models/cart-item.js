const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const CartItem = sequelize.define('cartItem' , {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    quantity: Sequelize.INTEGER, // for single can write like this
});

module.exports = CartItem;