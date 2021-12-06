const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Countries = sequelize.define('countries', {
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
},
{
    freezeTableName: true, // ? Disable adding 's' suffix to table name
});

module.exports = Countries;