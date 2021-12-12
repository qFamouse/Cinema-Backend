const express = require('express');
const router = express.Router();

const ticketsController = require('../controllers/TicketsController');

router.get('/tickets', ticketsController.GetAll);
router.get('/tickets/:id', ticketsController.GetDetailedById);
router.post('/tickets', ticketsController.CreateOne);
router.patch('/tickets/:id', ticketsController.EditById);
router.delete('/tickets/:id', ticketsController.DeleteById);

module.exports = router;