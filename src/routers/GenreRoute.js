const express = require('express');
const router = express.Router();

const genreController = require('../controllers/GenreController');

router.get('/genres', genreController.GetAll);
router.get('/genres/:id', genreController.GetById);
router.post('/genres', genreController.CreateOne);
router.patch('/genres/:id', genreController.EditById);
router.delete('/genres/:id', genreController.DeleteById);

module.exports= router;