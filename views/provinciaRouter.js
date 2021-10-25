const express = require('express');
const router = express.Router();

//Importo modelo de datos
const ProvinciaController = require('../controllers/provinciaController');

// End-points CRUD provincias
router.get('/', ProvinciaController.getAll);
router.get('/:id', ProvinciaController.getById);
router.get('/type/:type', ProvinciaController.getByType);
router.post('/', ProvinciaController.create);
router.put('/:id', ProvinciaController.update);
router.delete('/', ProvinciaController.deleteAll);
router.delete('/:id', ProvinciaController.delete);

module.exports = router;