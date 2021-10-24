const router = require('express').Router();

//Importamos Routes definidas en views
const MovieRouter = require('./views/MovieRouter');
const CategoryRouter = require('./views/CategoryRouter');

//Rutas
router.use('/movies', MovieRouter);
router.use('/categories', CategoryRouter);

module.exports = router;