const Joi = require('joi');

const GenreScheme = {
    create: Joi.object().keys(
        {
            name: Joi.string()
                .max(50)
                .required()
        }
    ),

    edit: Joi.object().keys(
        {
            name: Joi.string()
                .max(50)
        }
    )
};

module.exports = GenreScheme;