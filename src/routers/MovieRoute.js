const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const movieScheme = require('../schemes/MovieScheme');

const movieController = require('../controllers/MovieController');
const mongoLogger = require("../utils/MongoLogger");

router.use(mongoLogger.LogHttpEvent);
router.get('/', movieController.GetAll
    /*
    #swagger.tags = ['Movies']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.get('/:id', movieController.GetDetailedById
    /*
    #swagger.tags = ['Movies']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.post('/', validate(movieScheme.create), movieController.CreateOne
    /*
    #swagger.tags = ['Movies']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.patch('/:id', validate(movieScheme.edit), movieController.EditById
    /*
    #swagger.tags = ['Movies']
    #swagger.security = [{ "bearerAuth": [] }]
    */);
router.delete('/:id', movieController.DeleteById
    /*
    #swagger.tags = ['Movies']
    #swagger.security = [{ "bearerAuth": [] }]
    */);

module.exports = router;