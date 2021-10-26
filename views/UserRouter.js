const express = require('express');
const router = express.Router();

//Importo modelo de datos
const AuthController = require('../controllers/AuthController');


// Dos rutas: login y registro
// /api/singin & /api/singup
router.post('/signin', AuthController.signIn);
router.post('/signup', AuthController.signUp);


module.exports = router;