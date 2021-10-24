const express = require('express');
const router = express.Router();

//Importo modelo de datos
const CategoryController = require('../controllers/CategoryController');

// End-points CRUD movies
router.get('/', CategoryController.getAll);
router.get('/:id', CategoryController.getById);
router.get('/type/:type', CategoryController.getByType);
router.post('/', CategoryController.create);
router.put('/:id', CategoryController.update);
router.delete('/', CategoryController.deleteAll);
router.delete('/:id', CategoryController.delete);

module.exports = router;