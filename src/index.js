const express = require('express');
const app = express();
// Solution to Try Catch Problem for Global Exception Handling
const asyncRouter = require('async-express-router')
asyncRouter(app);
// Mongodb module
const mongo = require('./mongo/Mongo');


const loader = require('./loader');
app.use(loader);

app.listen(8080, () => console.log('Server is started'));