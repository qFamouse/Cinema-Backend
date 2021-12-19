const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const hallScheme = require('../schemes/HallScheme');

const isAuthorize = require('../middleware/IsAuthorize');

const hallController = require('../controllers/HallController');

router.use(isAuthorize);
router.get('/', hallController.GetAll);
router.get('/:id', hallController.GetById);
router.post('/', validate(hallScheme.create), hallController.CreateOne);
router.patch('/:id', validate(hallScheme.edit), hallController.EditById);
router.delete('/:id', hallController.DeleteById);

module.exports = router;