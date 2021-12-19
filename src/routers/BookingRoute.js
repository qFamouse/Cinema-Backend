const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const bookingScheme = require('../schemes/BookingSheme');

const isAuthorize = require('../middleware/IsAuthorize');

const bookingController = require('../controllers/BookingController');

router.use(isAuthorize);
router.get('/', bookingController.GetAll);
router.get('/:id', bookingController.GetDetailedById);
router.post('/', validate(bookingScheme.create), bookingController.Create);
router.patch('/:id', validate(bookingScheme.edit), bookingController.EditById);
router.delete('/:id', bookingController.DeleteById);

module.exports = router;