const express = require('express');
const router  = express.Router();
const { home, movies, movieDetail, addMovie, addMovieForm, editMovie, editMovieForm,deleteMovie } = require('../controllers/index')
const { catchErrors } = require('../middlewares/catchErrors')

//Home
router.get('/', home)

//Movies
router.get('/movies/all', movies)
router.get('/movies/detail/:id', movieDetail)
router.get('/movies/add', addMovieForm)
router.post('/movies/add', catchErrors(addMovie))
router.post('/movies/:id/delete', catchErrors(deleteMovie))
router.get('/movies/edit', editMovieForm)
router.post('/movies/edit', catchErrors(editMovie))

module.exports = router;
