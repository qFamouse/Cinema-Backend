const express = require('express');
const app = express();

// routers //
const usersRouter = require('./routers/UsersRoute');

// Database //
const sequelizeDB = require('./database/database');

sequelizeDB.authenticate()
    .then(() => console.log('Successful connection to the database'))
    .catch(e => console.log('Failed connection to the database. Exception: ' + e));

//

app.use(express.json());

 app.use(usersRouter);

app.listen(8080, () => console.log('server is started'));