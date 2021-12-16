const express = require('express');
const router = express.Router();

const bookingController = require('../controllers/BookingController');

router.get('/', bookingController.GetAll);
router.get('/:id', bookingController.GetDetailedById);
router.post('/', bookingController.CreateOne);
router.patch('/:id', bookingController.EditById);
router.delete('/:id', bookingController.DeleteById);

module.exports = router;