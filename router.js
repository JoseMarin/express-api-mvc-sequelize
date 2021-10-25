const router = require('express').Router();

//Importamos Routes definidas en views
const caRouter = require('./views/caRouter');
const provinciaRouter = require('./views/provinciaRouter');
const localidadRouter = require('./views/localidadRouter');

//Rutas
router.use('/ca', caRouter);
router.use('/provincia', provinciaRouter);
router.use('/localidad', localidadRouter);

module.exports = router;