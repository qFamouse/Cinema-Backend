const sequelize = require('../config/database');

const users         = require('../models/User');
const userInfo      = require('../models/UserInfo');
const roles         = require('../models/Role');
const countries     = require('../models/Countries');
const genres        = require('../models/Genre');
const movies        = require('../models/Movie');
const reviews       = require('../models/Review');
const halls         = require('../models/Hall');
const places        = require('../models/Place');
const seances       = require('../models/Seance');
const tickets       = require('../models/Ticket');
const booking       = require('../models/Booking');

users.hasOne(userInfo);
userInfo.belongsTo(users);
users.belongsTo(roles);

movies.belongsTo(genres);
movies.belongsTo(countries);

reviews.belongsTo(movies);
reviews.belongsTo(users);

seances.hasOne(halls);
seances.hasOne(movies);

places.hasOne(hall);

tickets.hasOne(seances);
tickets.hasOne(places);

booking.hasOne(users);
booking.hasOne(tickets);