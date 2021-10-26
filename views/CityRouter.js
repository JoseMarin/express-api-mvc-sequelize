const express = require('express');
const router = express.Router();

//Importo modelo de datos
const CityController = require('../controllers/CityController');

// End-points CRUD movies
router.get('/', CityController.getAll);
router.get('/:id', CityController.getById);
router.get('/nombre/:nombre', CityController.getByName);
router.post('/', CityController.create);
router.put('/:id', CityController.update);
router.delete('/', CityController.deleteAll);
router.delete('/:id', CityController.delete);

module.exports = router;