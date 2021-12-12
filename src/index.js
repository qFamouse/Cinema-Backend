const express = require('express');
const app = express();

// routers //
const usersRouter = require('./routers/UsersRoute');
const rolesRouter = require('./routers/RolesRoute');
const countriesRouter = require('./routers/CountriesRoute');

// Database //
const sequelizeDB = require('./database/database');

sequelizeDB.authenticate()
    .then(() => console.log('Successful connection to the database'))
    .catch(e => console.log('Failed connection to the database. Exception: ' + e));

//

app.use(express.json()); // For answers in JSON

app.use(usersRouter);
app.use(rolesRouter);
app.use(countriesRouter);


app.listen(8080, () => console.log('server is started'));