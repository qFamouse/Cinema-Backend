const express = require('express');
const router = express.Router();

const ticketController = require('../controllers/TicketController');

router.get('/tickets', ticketController.GetAll);
router.get('/tickets/:id', ticketController.GetDetailedById);
router.post('/tickets', ticketController.CreateOne);
router.patch('/tickets/:id', ticketController.EditById);
router.delete('/tickets/:id', ticketController.DeleteById);

module.exports = router;