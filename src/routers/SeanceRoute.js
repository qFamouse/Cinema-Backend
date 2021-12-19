const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const seanceScheme = require('../schemes/SeanceScheme');

const isAuthorize = require('../middleware/IsAuthorize');

const seanceController = require('../controllers/SeanceController');

router.use(isAuthorize);
router.get('/', seanceController.GetAll);
router.get('/:id', seanceController.GetDetailedById);
router.post('/', validate(seanceScheme.create), seanceController.Create);
router.patch('/:id', validate(seanceScheme.edit), seanceController.EditById);
router.delete('/:id', seanceController.DeleteById);

module.exports = router;