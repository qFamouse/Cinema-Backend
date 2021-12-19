const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const ticketScheme = require('../schemes/TicketScheme');

const isAuthorize = require('../middleware/IsAuthorize');

const ticketController = require('../controllers/TicketController');

router.use(isAuthorize);
router.get('/', ticketController.GetAll);
router.get('/:id', ticketController.GetDetailedById);
router.post('/', validate(ticketScheme.create), ticketController.Create);
router.patch('/:id', validate(ticketScheme.edit), ticketController.EditById);
router.delete('/:id', ticketController.DeleteById);

module.exports = router;