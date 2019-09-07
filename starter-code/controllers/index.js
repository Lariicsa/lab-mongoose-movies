const Movie = require('../models/Movie')

exports.home = async (req, res, next) => {
	const movies = await Movie.find()
	res.render('index', { movies })
}


//Movies
exports.movies = async (req, res, next) => {
	const movies = await Movie.find()
	res.render('movies/all', { movies })
}

exports.movieDetail = async (req, res, next) => {
  const { id } = req.params;
  const movies = await Movie.findById(id);
  res.render('movies/detail', movies);
}

exports.addMovieForm = async (req, res, next) => {
	const movies = await Movie.find()
	res.render('movies/add', { movies })
}

exports.addMovie = async (req, res) => {
	const {title, genre, plot  } = req.body
	await Movie.create({ title, genre, plot })
	res.redirect('/movies/all')
}