const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const movieScheme = require('../schemes/MovieScheme');

const movieController = require('../controllers/MovieController');

router.get('/', movieController.GetAll);
router.get('/:id', movieController.GetDetailedById);
router.post('/', validate(movieScheme.create), movieController.CreateOne);
router.patch('/:id', validate(movieScheme.edit), movieController.EditById);
router.delete('/:id', movieController.DeleteById);

module.exports = router;