//Importo modelo de datos
const db = require("../models");
const ca = db.ca;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

const caController = {}; //Create the object controller


//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all categories from database
caController.getAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { name: { [Op.like]: `%${nombre}%` } } : null;
  
    ca.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving ca."
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET ca by Id from database
caController.getById = (req, res) => {
    const id = req.params.id;
  
    ca.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find ca with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving cas with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//CREATE a new ca in database
caController.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a ca
    const newca = {
      nombre: req.body.nombre,
      poblacion: req.body.poblacion,
      superficie: req.body.superficie,
    };
  
    // Save ca in the database
    ca.create(newca)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the newCa."
        });
      });
  };


//-------------------------------------------------------------------------------------
//UPDATE a category from database
caController.update = (req, res) => {
    const id = req.params.id;
  
    ca.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ca was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update ca with id=${id}. Maybe provincia was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating ca with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET ca by Name from database  
//FindByName
caController.getByNombre = (req, res) => {
    ca.findAll({ where: { nombre: req.params.name } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving cas."
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE a ca by Id from database
caController.delete = (req, res) => {
    const id = req.params.id;
  
    ca.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ca was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete ca with id=${id}. Maybe provincia was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete ca with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE all ca from database
//delete all ca   
caController.deleteAll = (req, res) => {
    ca.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} ca were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all ca."
        });
      });
  };

module.exports = caController;