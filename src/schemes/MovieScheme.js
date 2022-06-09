const Joi = require('joi');

const MovieScheme = {
    create: Joi.object().keys(
        {
            title: Joi.string()
                .min(1)
                .max(256)
                .required(),

            genreId: Joi.number()
                .required(),

            poster: Joi.string(),

            duration: Joi.string()
                .required(),

            ageLimit: Joi.number()
                .max(18)
                .required(),

            date: Joi.string()
                .required(),

            countryId: Joi.number()
                .required(),

            director: Joi.string()
                .max(256)
                .required(),

            actors: Joi.string()
                .max(256)
                .required(),

            synopsis: Joi.string()
                .required(),

            startRentalDate: Joi.string(),

            endRentalDate: Joi.string()
        }
    ),

    edit: Joi.object().keys(
        {
            title: Joi.string()
                .alphanum()
                .min(1)
                .max(256),

            genreId: Joi.number(),

            poster: Joi.string(),

            duration: Joi.string(),

            ageLimit: Joi.number()
                .max(18),

            date: Joi.string(),

            countryId: Joi.number(),

            director: Joi.string()
                .max(256),

            actors: Joi.string()
                .max(256),

            synopsis: Joi.string(),

            startRentalDate: Joi.string(),

            endRentalDate: Joi.string()
        }
    ),

    setPoster: Joi.object().schema()
};

module.exports = MovieScheme;
