const express = require('express');
const router = express.Router();

const countriesController = require('../controllers/CountriesController');

router.get('/countries', countriesController.GetAll);
router.get('/countries/:id', countriesController.GetById);
router.post('/countries', countriesController.CreateOne);
router.patch('/countries/:id', countriesController.EditById);
router.delete('/countries/:id', countriesController.DeleteById);

module.exports= router;