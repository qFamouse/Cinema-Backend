const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const countryScheme = require('../schemes/CountryScheme');

const isAuthorize = require('../middleware/IsAuthorize');

const countryController = require('../controllers/CountryController');

router.use(isAuthorize);
router.get('/', countryController.GetAll);
router.get('/:id', countryController.GetById);
router.post('/', validate(countryScheme.create), countryController.Create);
router.patch('/:id', validate(countryScheme.edit), countryController.EditById);
router.delete('/:id', countryController.DeleteById);

module.exports= router;