const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const MovieScheme = require('../schemes/MovieScheme');

const movieController = require('../controllers/MovieController');

router.get('/movies', movieController.GetAll);
router.get('/movies/:id', movieController.GetDetailedById);
router.post('/movies', validate(MovieScheme.create), movieController.CreateOne);
router.patch('/movies/:id', validate(MovieScheme.edit), movieController.EditById);
router.delete('/movies/:id', movieController.DeleteById);

module.exports = router;