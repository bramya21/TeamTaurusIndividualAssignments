"use strict";
exports.__esModule = true;
var MovieImple = /** @class */ (function () {
    function MovieImple(movies) {
        this.movies = movies;
    }
    MovieImple.prototype.setMovie = function (movie) {
        this.movies.push(movie);
    };
    MovieImple.prototype.getMovies = function () {
        return this.movies;
    };
    MovieImple.prototype.getMovieByName = function (title) {
        return this.movies.filter(function (movie) { return movie.title == title; });
    };
    return MovieImple;
}());
exports.MovieImple = MovieImple;
