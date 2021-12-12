const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/MoviesController');

router.get('/movies', moviesController.GetAll);
router.get('/movies/:id', moviesController.GetById);
router.post('/movies', moviesController.CreateOne);
router.patch('/movies/:id', moviesController.EditById);
router.delete('/movies/:id', moviesController.DeleteById);

module.exports = router;