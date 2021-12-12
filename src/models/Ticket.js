const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Ticket = sequelize.define('ticket', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        field: 'id'
    },
    seanceId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'seance_id'
    },
    placeId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'place_id'
    }
},
{
    timestamps: false
});

module.exports = Ticket;