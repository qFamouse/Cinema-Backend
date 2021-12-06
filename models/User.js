const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        field: 'id'
    },
    login: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
        field: 'login'
    },
    password: { // TODO: Size of password can be less
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: false,
        field: 'password'
    },
    roleId: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        unique: false,
        field: 'role_id',
        defaultValue: 1 // ? The role of regular user 
    }
});

module.exports = User;