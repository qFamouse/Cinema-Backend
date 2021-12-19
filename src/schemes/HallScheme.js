const Joi = require('joi');

const HallScheme = {
    create: Joi.object().keys(
        {
            name: Joi.string()
                .max(30)
                .required(),

            floorCount: Joi.number().integer()
                .required()
        }
    ),

    edit: Joi.object().keys(
        {
            name: Joi.string()
                .max(30),

            floorCount: Joi.number().integer()
        }
    )
};

module.exports = HallScheme;