//Importo modelo de datos
const db = require("../models");
const cities = db.city;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

var provinceModel = require('../models').province;  //Add for dependency response

const CityController = {}; //Create the object controller



//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all cities from database
CityController.getAll = (req, res) => {

  cities.findAll({ include: [{ model: provinceModel }] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cities."
      });
    });
};


//-------------------------------------------------------------------------------------
//GET cities by Id from database
CityController.getById = (req, res) => {
  const id = req.params.id;

  cities.findByPk(id, { include: [{ model: provinceModel }] })
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
        message: "Error retrieving cities with id=" + id
      });
    });
};



//-------------------------------------------------------------------------------------
//CREATE a new City in database
CityController.create = (req, res) => {
  // Validate request
  if (!req.body.nombre) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a cities
  const newCity = {
    nombre: req.body.nombre,
    poblacion: req.body.poblacion,
    cp: req.body.cp,
    capital_pro: req.body.capital_pro,
    capital_ca: req.body.capital_ca,
    provinceId: req.body.provinceId
  };

  // Save cities in the database
  cities.create(newCity)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the City."
      });
    });
};


//-------------------------------------------------------------------------------------
//UPDATE a City from database
CityController.update = (req, res) => {
  const id = req.params.id;

  cities.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "City was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update City with id=${id}. Maybe City was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating City with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//GET City by Title from database 
//FindByTitle
CityController.getByName = (req, res) => {
  cities.findAll({ where: { nombre: req.params.nombre } })
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
//DELETE a City by Id from database
CityController.delete = (req, res) => {
  const id = req.params.id;

  cities.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "City was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete City with id=${id}. Maybe City was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete City with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//DELETE all cities from database
//delete all cities 
CityController.deleteAll = (req, res) => {
  cities.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} cities were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all cities."
      });
    });
};

module.exports = CityController;