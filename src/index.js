const express = require('express');
const app = express();

// routers //
const usersRouter = require('./routers/UserRoute');
const rolesRouter = require('./routers/RoleRoute');
const countriesRouter = require('./routers/CountryRoute');
const genresRouter = require('./routers/GenreRoute');
const moviesRouter = require('./routers/MovieRoute');
const seancesRouter = require('./routers/SeanceRoute');
const hallsRouter = require('./routers/HallRoute');
const placesRouter = require('./routers/PlaceRoute');
const ticketsRouter = require('./routers/TicketRoute');
const bookingRouter = require('./routers/BookingRoute');
const reviewsRouter = require('./routers/ReviewRoute');

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
app.use(genresRouter);
app.use(moviesRouter);
app.use(seancesRouter);
app.use(hallsRouter);
app.use(placesRouter);
app.use(ticketsRouter);
app.use(bookingRouter);
app.use(reviewsRouter);

app.listen(8080, () => console.log('server is started'));