//Importo modelo de datos
const db = require("../models");
const localidads = db.localidad;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

var provinciaModel = require('../models').provincia;  //Add for dependency response

const localidadController = {}; //Create the object controller



//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all localidads from database
localidadController.getAll = (req, res) => {

  localidads.findAll({ include: [{ model: provinciaModel }] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving localidads."
      });
    });
};


//-------------------------------------------------------------------------------------
//GET localidads by Id from database
localidadController.getById = (req, res) => {
  const id = req.params.id;

  localidads.findByPk(id, { include: [{ model: provinciaModel }] })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving localidads with id=" + id
      });
    });
};



//-------------------------------------------------------------------------------------
//CREATE a new localidad in database
localidadController.create = (req, res) => {
  // Validate request
  if (!req.body.nombre) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a localidads
  const newlocalidad = {
    nombre: req.body.nombre,
    poblacion: req.body.poblacion,
    capital_pro: req.body.capital_pro,
    capital_ca: req.body.capital_ca,
    provinciaId: req.body.provinciaId
  };

  // Save localidads in the database
  localidads.create(newlocalidad)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the localidad."
      });
    });
};


//-------------------------------------------------------------------------------------
//UPDATE a localidad from database
localidadController.update = (req, res) => {
  const id = req.params.id;

  localidads.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "localidad was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update localidad with id=${id}. Maybe localidad was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating localidad with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//GET localidad by name from database 
//FindByname
localidadController.getByName = (req, res) => {
  localidads.findAll({ where: { nombre: req.params.nombre } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


//-------------------------------------------------------------------------------------
//DELETE a localidad by Id from database
localidadController.delete = (req, res) => {
  const id = req.params.id;

  localidads.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "localidad was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete localidad with id=${id}. Maybe localidad was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete localidad with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//DELETE all localidads from database
//delete all localidads 
localidadController.deleteAll = (req, res) => {
  localidads.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} localidads were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all localidads."
      });
    });
};

module.exports = localidadController;