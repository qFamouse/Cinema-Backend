const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Review = sequelize.define('review', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        field: 'id'
    },
    movieId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'movie_id'
    },
    userId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'user_id'
    },
    rating: {
        type: Sequelize.FLOAT,
        allowNull: false,
        unique: false,
        field: 'rating'
    },
    review: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        field: 'review'
    }
})

module.exports = Review;