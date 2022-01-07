const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const genreScheme = require('../schemes/GenreScheme');

const isAuthorize = require('../middleware/IsAuthorize');

const genreController = require('../controllers/GenreController');
const mongoLogger = require("../utils/MongoLogger");

router.use(isAuthorize);
router.use(mongoLogger.LogHttpEvent);
router.get('/', genreController.GetAll
    /*
    #swagger.tags = ['Genres']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get('/:id', genreController.GetById
    /*
    #swagger.tags = ['Genres']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.post('/', validate(genreScheme.create), genreController.Create
    /*
    #swagger.tags = ['Genres']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.patch('/:id', validate(genreScheme.edit), genreController.EditById
    /*
    #swagger.tags = ['Genres']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete('/:id', genreController.DeleteById
    /*
    #swagger.tags = ['Genres']
    #swagger.security = [{ "bearerAuth": [] }]
    */);

module.exports= router;