//Importo modelo de datos
const db = require("../models");
const provincia = db.provincia;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

const ProvinciaController = {}; //Create the object controller


//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all categories from database
ProvinciaController.getAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;
  
    provincia.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving provincias."
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET categories by Id from database
ProvinciaController.getById = (req, res) => {
    const id = req.params.id;
  
    provincia.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find provincia with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving provincias with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//CREATE a new provincia in database
ProvinciaController.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a provincia
    const newprovincia = {
      cp: req.body.cp,
      nombre: req.body.nombre,
      poblacion: req.body.poblacion,
      superficie : req.body.superficie,
      caId : req.body.caId
    };
  
    // Save provincia in the database
    provincia.create(newprovincia)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the newprovincia."
        });
      });
  };


//-------------------------------------------------------------------------------------
//UPDATE a provincia from database
ProvinciaController.update = (req, res) => {
    const id = req.params.id;
  
    provincia.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "provincia was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update provincia with id=${id}. Maybe CA was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating provincia with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET categories by Type from database  
//FindByType
ProvinciaController.getByName = (req, res) => {
    provincia.findAll({ where: { nombre: req.params.nombre } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving provincias."
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE a provincia by Id from database
ProvinciaController.delete = (req, res) => {
    const id = req.params.id;
  
    provincia.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "provincia was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete provincia with id=${id}. Maybe Movie was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete provincia with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE all categories from database
//delete all categories   
ProvinciaController.deleteAll = (req, res) => {
    provincia.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} categories were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all categories."
        });
      });
  };

module.exports = ProvinciaController;