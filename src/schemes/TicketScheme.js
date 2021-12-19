const Joi = require('joi');

const TicketScheme = {
    create: Joi.object().keys(
        {
            seanceId: Joi.number()
                .integer()
                .required(),

            placeId: Joi.number()
                .integer()
                .required()
        }
    ),

    edit: Joi.object().keys(
        {
            seanceId: Joi.number()
                .integer(),

            placeId: Joi.number()
                .integer()
        }
    )
};

module.exports = TicketScheme;