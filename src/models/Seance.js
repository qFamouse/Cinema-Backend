const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Seance = sequelize.define('seance', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        field: 'id'
    },
    hallId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'hall_id'
    },
    movieId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'movie_id'
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: false,
        field: 'date'
    }
});

module.exports = Seance;