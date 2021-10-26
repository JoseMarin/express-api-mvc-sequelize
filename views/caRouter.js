const express = require('express');
const router = express.Router();

//Importo modelo de datos
const CaController = require('../controllers/CaController');

// End-points CRUD movies
router.get('/', CaController.getAll);
router.get('/:id', CaController.getById);
router.get('/nombre/:nombre', CaController.getByName);
router.post('/', CaController.create);
router.put('/:id', CaController.update);
router.delete('/', CaController.deleteAll);
router.delete('/:id', CaController.delete);

module.exports = router;