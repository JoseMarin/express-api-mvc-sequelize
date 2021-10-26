const express = require('express');
const router = express.Router();

//Importo modelo de datos
const ProvinceController = require('../controllers/ProvinceController');

// End-points CRUD movies
router.get('/', ProvinceController.getAll);
router.get('/:id', ProvinceController.getById);
router.get('/nombre/:nombre', ProvinceController.getByName);
router.post('/', ProvinceController.create);
router.put('/:id', ProvinceController.update);
router.delete('/', ProvinceController.deleteAll);
router.delete('/:id', ProvinceController.delete);

module.exports = router;