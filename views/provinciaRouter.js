const express = require('express');
const router = express.Router();

//Importo modelo de datos
const provinciaController = require('../controllers/provinciaController');

// End-points CRUD provincias
router.get('/', provinciaController.getAll);
router.get('/:id', provinciaController.getById);
router.get('/nombre/:nombre', provinciaController.getByName);
router.post('/', provinciaController.create);
router.put('/:id', provinciaController.update);
router.delete('/', provinciaController.deleteAll);
router.delete('/:id', provinciaController.delete);

module.exports = router;