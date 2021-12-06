const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Genre = sequelize.define('genre', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        field: 'id'
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
        field: 'name'
    }
});

module.exports = Genre;