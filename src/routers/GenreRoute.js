const express = require('express');
const router = express.Router();

const genreController = require('../controllers/GenreController');

router.get('/', genreController.GetAll);
router.get('/:id', genreController.GetById);
router.post('/', genreController.CreateOne);
router.patch('/:id', genreController.EditById);
router.delete('/:id', genreController.DeleteById);

module.exports= router;