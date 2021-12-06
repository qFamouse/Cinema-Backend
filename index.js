const express = require('express');

// Database //
const db = require('./config/database')


// Test BD
db.authenticate()
    .then(() => console.log('Successful connection to the database'))
    .catch(e => console.log('Failed connection to the database. Exception: ' + e));

const app = express();

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log('server is started'));

















