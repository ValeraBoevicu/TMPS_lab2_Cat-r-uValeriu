// Singleton pattern for managing the list of movies
export class MovieList {
    constructor() {
        if (MovieList.instance) {
            return MovieList.instance;
        }

        this.movies = [];
        MovieList.instance = this;
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    removeMovie(movie) {
        const index = this.movies.indexOf(movie);
        if (index !== -1) {
            this.movies.splice(index, 1);
        }
    }

    getAllMovies() {
        return this.movies;
    }
}