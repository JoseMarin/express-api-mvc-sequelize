//Importo modelo de datos
const db = require("../models");
const movies = db.movie;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

var categoryModel  = require('../models').category;  //Add for dependency response

const MovieController = {}; //Create the object controller



//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all movies from database
MovieController.getAll = (req, res) => {
    
    movies.findAll({include: [{ model:categoryModel}]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving movies."
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET movies by Id from database
MovieController.getById = (req, res) => {
    const id = req.params.id;

    movies.findByPk(id, {include: [{ model:categoryModel}]})
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
          message: "Error retrieving movies with id=" + id
        });
      });
  };



//-------------------------------------------------------------------------------------
//CREATE a new movie in database
MovieController.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Movies
    const newMovie = {
      title: req.body.title,
      categoryId: req.body.categoryId
    };
  
    // Save Movies in the database
    movies.create(newMovie)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Movie."
        });
      });
  };


//-------------------------------------------------------------------------------------
//UPDATE a movie from database
MovieController.update = (req, res) => {
    const id = req.params.id;
  
    movies.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Movie was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Movie with id=${id}. Maybe Movie was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Movie with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET movie by Title from database 
//FindByTitle
  MovieController.getByTitle = (req, res) => {
    movies.findAll({ where: { title: req.params.title } })
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
//DELETE a movie by Id from database
MovieController.delete = (req, res) => {
    const id = req.params.id;
  
    movies.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Movie was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Movie with id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE all movies from database
//delete all movies 
  MovieController.deleteAll = (req, res) => {
    movies.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Movies were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all movies."
        });
      });
  };

module.exports = MovieController;