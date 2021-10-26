const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const CityRouter = require('./views/CityRouter');
const ProvinceRouter = require('./views/ProvinceRouter');
const CaRouter = require('./views/CaRouter');
const UserRouter = require('./views/UserRouter');

//Rutas
router.use('/api', UserRouter); //Login and register routes
router.use('/cities', CityRouter); //add auth
router.use('/provinces', ProvinceRouter); //add auth
router.use('/cas', CaRouter);

module.exports = router;