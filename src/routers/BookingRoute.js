const express = require('express');
const router = express.Router();

const bookingController = require('../controllers/BookingController');

router.get('/booking', bookingController.GetAll);
router.get('/booking/:id', bookingController.GetDetailedById);
router.post('/booking', bookingController.CreateOne);
router.patch('/booking/:id', bookingController.EditById);
router.delete('/booking/:id', bookingController.DeleteById);

module.exports = router;