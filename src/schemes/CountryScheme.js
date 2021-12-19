const Joi = require('joi');

const Scheme = {
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

module.exports = Scheme;