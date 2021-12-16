const express = require('express');
const router = express.Router();

const countryController = require('../controllers/CountryController');

router.get('/countries', countryController.GetAll);
router.get('/countries/:id', countryController.GetById);
router.post('/countries', countryController.CreateOne);
router.patch('/countries/:id', countryController.EditById);
router.delete('/countries/:id', countryController.DeleteById);

module.exports= router;