const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const roleScheme = require('../schemes/RoleScheme');

const isAuthorize = require('../middleware/IsAuthorize');

const roleController = require('../controllers/RoleController');

router.use(isAuthorize);
router.get('/', roleController.GetAll);
router.get('/:id', roleController.GetById);
router.post('/', validate(roleScheme.create), roleController.Create);
router.patch('/:id', validate(roleScheme.edit), roleController.EditById);
router.delete('/:id', roleController.DeleteById);

module.exports = router;