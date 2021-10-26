const router = require('express').Router();

//Importamos Routes definidas en views
const caRouter = require('./views/caRouter');
const provinciaRouter = require('./views/provinciaRouter');
const localidadRouter = require('./views/localidadRouter');

//Rutas
router.use('/cas', caRouter);
router.use('/provincias', provinciaRouter);
router.use('/localidads', localidadRouter);

module.exports = router;