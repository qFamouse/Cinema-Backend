const express = require('express');
const router = express.Router();

const ticketController = require('../controllers/TicketController');

router.get('/', ticketController.GetAll);
router.get('/:id', ticketController.GetDetailedById);
router.post('/', ticketController.CreateOne);
router.patch('/:id', ticketController.EditById);
router.delete('/:id', ticketController.DeleteById);

module.exports = router;