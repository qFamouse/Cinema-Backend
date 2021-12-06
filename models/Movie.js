const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Movie = sequelize.define('movie', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        field: 'id'
    },
    title: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: false,
        field: 'title'
    },
    genreId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'genre_id'
    },
    poster: {
        type: Sequelize.STRING(256),
        allowNull: true,
        unique: false,
        field: 'poster'
    },
    duration: {
        type: Sequelize.DATE, // TODO: Datatype time not exist
        allowNull: false,
        unique: false,
        field: 'duration'
    },
    ageLimit: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        field: 'age_limit'
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: false,
        field: 'date'
    },
    countryId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'country_id'
    },
    director: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: false,
        field: 'director'
    },
    actors: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: false,
        field: 'actors'
    },
    synopsis: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        field: 'actors'
    },
    startRentalDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        unique: false,
        field: 'start_rental_date'
    },
    endRentalDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        unique: false,
        field: 'end_rental_date'
    }
});

module.exports = Movie;