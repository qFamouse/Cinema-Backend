const { connect } = require('sequelize');


const connect = new Sequelize('famouse', 'postgres', '', {
    host: 'localhost',
    dialect: 'pg',
    // port: 5439,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


connect.authenticate()
    .then(() => console.log('Successful connection to the database'))
    .then(e => console.log('Failed connection to the database. Exception: ' + e));

    
module.exports = connect;