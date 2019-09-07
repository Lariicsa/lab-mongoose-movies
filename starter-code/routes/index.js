const express = require('express');
const router  = express.Router();
const { home, movies, movieDetail, addMovie, addMovieForm } = require('../controllers/index')
const { catchErrors } = require('../middlewares/catchErrors')

//Home
router.get('/', home)

//Movies
router.get('/movies/all', movies)
router.get('/movies/detail/:id', movieDetail)
router.get('/movies/add', addMovieForm)
router.post('/movies/add', catchErrors(addMovie))

module.exports = router;
