const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Hall = sequelize.define('Hall', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        field: 'id'
    },
    name: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
        field: 'name'
    },
    floorCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        field: 'floor_count'
    },
    placeCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        field: 'place_count'
    }
});

module.exports = Hall;