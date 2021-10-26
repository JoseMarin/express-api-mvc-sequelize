//Importo modelo de datos
const db = require("../models");
const provinces = db.province;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

var caModel = require('../models').ca;  //Add for dependency response

const ProvinceController = {}; //Create the object controller



//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all provinces from database
ProvinceController.getAll = (req, res) => {

  provinces.findAll({ include: [{ model: caModel }] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving provinces."
      });
    });
};


//-------------------------------------------------------------------------------------
//GET provinces by Id from database
ProvinceController.getById = (req, res) => {
  const id = req.params.id;

  provinces.findByPk(id, { include: [{ model: caModel }] })
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
        message: "Error retrieving provinces with id=" + id
      });
    });
};



//-------------------------------------------------------------------------------------
//CREATE a new Province in database
ProvinceController.create = (req, res) => {
  // Validate request
  if (!req.body.nombre) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a province
  const newProvince = {
    nombre: req.body.nombre,
    cp: req.body.cp,
    poblacion: req.body.poblacion,
    superficie: req.body.superficie,
    caId: req.body.caId
  };

  // Save provinces in the database
  provinces.create(newProvince)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Province."
      });
    });
};


//-------------------------------------------------------------------------------------
//UPDATE a Province from database
ProvinceController.update = (req, res) => {
  const id = req.params.id;

  provinces.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Province was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Province with id=${id}. Maybe Province was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Province with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//GET Province by nombre from database 
//FindByNombre
ProvinceController.getByName = (req, res) => {
  provinces.findAll({ where: { nombre: req.params.nombre } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving provinces."
      });
    });
};


//-------------------------------------------------------------------------------------
//DELETE a Province by Id from database
ProvinceController.delete = (req, res) => {
  const id = req.params.id;

  provinces.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Province was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Province with id=${id}. Maybe Province was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Province with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//DELETE all provinces from database
//delete all provinces 
ProvinceController.deleteAll = (req, res) => {
  provinces.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} provinces were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all provinces."
      });
    });
};

module.exports = ProvinceController;