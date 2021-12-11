const Sequelize = require('sequelize');

module.exports = new Sequelize('cinema', 'postgres', null, {
    host: 'localhost',
    dialect: 'postgres',
    port: 5439,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});