const Joi = require('joi');

const TicketScheme = {
    create: Joi.object().keys(
        {
            seanceId: Joi.number()
                .integer()
                .required(),

            placeId: Joi.number()
                .integer()
                .required(),

            cost: Joi.number().required()
        }
    ),

    edit: Joi.object().keys(
        {
            seanceId: Joi.number()
                .integer(),

            placeId: Joi.number()
                .integer(),

            cost: Joi.number()
        }
    )
};

module.exports = TicketScheme;
