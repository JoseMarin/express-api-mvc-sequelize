const express = require('express');
const router = express.Router();

//Importo modelo de datos
const localidadController = require('../controllers/localidadController');

// End-points CRUD localidads
router.get('/', localidadController.getAll);
router.get('/:id', localidadController.getById);
router.get('/nombre/:nombre', localidadController.getByName);
router.post('/', localidadController.create);
router.put('/:id', localidadController.update);
router.delete('/', localidadController.deleteAll);
router.delete('/:id', localidadController.delete);

module.exports = router;