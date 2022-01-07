const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const countryScheme = require('../schemes/CountryScheme');

const isAuthorize = require('../middleware/IsAuthorize');

const countryController = require('../controllers/CountryController');
const mongoLogger = require("../utils/MongoLogger");

router.use(isAuthorize);
router.use(mongoLogger.LogHttpEvent);
router.get('/', countryController.GetAll
    /*
    #swagger.tags = ['Countries']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get('/:id', countryController.GetById
    /*
    #swagger.tags = ['Countries']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.post('/', validate(countryScheme.create), countryController.Create
    /*
    #swagger.tags = ['Countries']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.patch('/:id', validate(countryScheme.edit), countryController.EditById
    /*
    #swagger.tags = ['Countries']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete('/:id', countryController.DeleteById
    /*
    #swagger.tags = ['Countries']
    #swagger.security = [{ "bearerAuth": [] }]
    */);

module.exports= router;