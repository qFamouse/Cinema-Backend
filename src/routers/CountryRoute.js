const express = require('express');
const router = express.Router();

const countryController = require('../controllers/CountryController');

router.get('/', countryController.GetAll);
router.get('/:id', countryController.GetById);
router.post('/', countryController.CreateOne);
router.patch('/:id', countryController.EditById);
router.delete('/:id', countryController.DeleteById);

module.exports= router;