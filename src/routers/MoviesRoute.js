const express = require('express');
const router = express.Router();

const validate = require('../middleware/Validate');
const MovieScheme = require('../schemes/MovieScheme');

const moviesController = require('../controllers/MoviesController');

router.get('/movies', moviesController.GetAll);
router.get('/movies/:id', moviesController.GetDetailedById);
router.post('/movies', validate(MovieScheme.create), moviesController.CreateOne);
router.patch('/movies/:id', validate(MovieScheme.edit), moviesController.EditById);
router.delete('/movies/:id', moviesController.DeleteById);

module.exports = router;