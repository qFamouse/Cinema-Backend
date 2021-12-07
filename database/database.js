const sequelize = require('../config/database');

const users         = require('../models/User');
const userInfo      = require('../models/UserInfo');
const userRole      = require('../models/UserRole');
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

// User Info
users.hasOne(userInfo, { foreignKey: 'userId' });
userInfo.belongsTo(users, { foreignKey: 'userId' });

// Users roles 
users.belongsToMany(roles, { through: 'users_roles' });
roles.belongsToMany(users, { through: 'users_roles' });

// Movies 
movies.belongsTo(genres);
genres.hasMany(movies);

movies.belongsTo(countries);
countries.hasMany(movies);

// Reviews
reviews.belongsTo(movies);
movies.hasMany(reviews);

reviews.belongsTo(users);
users.hasMany(reviews);

// Seanses
seances.belongsTo(halls);
halls.hasMany(seances);

seances.belongsTo(movies);
movies.hasMany(seances);

// Places
places.belongsTo(halls);
halls.hasMany(places);

// Tickets
tickets.belongsTo(seances);
seances.hasMany(tickets);

tickets.belongsTo(places);
places.hasMany(tickets);

// Booking
booking.belongsTo(users);
users.hasMany(booking);

booking.belongsTo(tickets);
tickets.hasMany(booking);