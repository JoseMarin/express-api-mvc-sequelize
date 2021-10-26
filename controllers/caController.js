//Importo modelo de datos
const db = require("../models");
const ca = db.ca;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

const CaController = {}; //Create the object controller


//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all ca from database
CaController.getAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

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
CaController.getById = (req, res) => {
  const id = req.params.id;

  ca.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Category with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving ca with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//CREATE a new category in database
CaController.create = (req, res) => {
  // Validate request
  if (!req.body.nombre) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Category
  const newCa = {
    nombre: req.body.nombre,
    poblacion: req.body.poblacion,
    superficie: req.body.superficie
  };

  // Save Category in the database
  ca.create(newCa)
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
CaController.update = (req, res) => {
  const id = req.params.id;

  ca.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Category was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Category with id=${id}. Maybe ca was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Category with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//GET ca by Type from database  
//FindByType
CaController.getByName = (req, res) => {
  ca.findAll({ where: { nombre: req.params.nombre } })
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
//DELETE a category by Id from database
CaController.delete = (req, res) => {
  const id = req.params.id;

  ca.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Category was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Category with id=${id}. Maybe ca was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Category with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
//DELETE all ca from database
//delete all ca   
CaController.deleteAll = (req, res) => {
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

module.exports = CaController;