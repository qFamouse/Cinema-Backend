const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const placeScheme = require('../schemes/PlaceScheme');

const isAuthorize = require('../middleware/IsAuthorize');

const placeController = require('../controllers/PlaceController');

router.use(isAuthorize);
router.get('/', placeController.GetAll);
router.get('/:id', placeController.GetDetailedById);
router.post('/', validate(placeScheme.create), placeController.Create);
router.patch('/:id', validate(placeScheme.edit), placeController.EditById);
router.delete('/:id', placeController.DeleteById);

module.exports = router;