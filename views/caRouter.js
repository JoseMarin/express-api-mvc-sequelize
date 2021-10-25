const express = require('express');
const router = express.Router();

//Importo modelo de datos
const caController = require('../controllers/caController');

// End-points CRUD movies
router.get('/', caController.getAll);
router.get('/:id', caController.getById);
router.get('/nombre/:nombre', caController.getByName);
router.post('/', caController.create);
router.put('/:id', caController.update);
router.delete('/', caController.deleteAll);
router.delete('/:id', caController.delete);

module.exports = router;