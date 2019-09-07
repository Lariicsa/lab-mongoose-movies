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

exports.deleteMovie = async (req, res) => {
	const { movieid } = req.query
	const movie = await Movie.findByIdAndRemove(movieid)
	res.redirect('/movies/all', movie)
}

exports.editMovieForm = async (req, res) => {
	const { movieid } = req.query
	const movie = await Movie.findById(movieid)
	res.render('movies/edit', movie)
}

exports.editMovie = async (req, res) => {
	const { title, genre, plot } = req.body
	const { movieid } = req.query
	await	Movie.findByIdAndUpdate(movieid, { title, genre, plot })
	res.redirect(`/movies/detail/${movieid}`)
}