import { MovieFactory } from "./MovieFactory.js";
import { MovieList } from "./MovieList.js";



const movieList = new MovieList();
const movieFactory = new MovieFactory();

let horrorMovie = movieFactory.createMovie("horror", "KarmaHorror", "3:35", "Nenea Valera", 2001);
let actionMovie = movieFactory.createMovie("action", "KarmaAction", "3:15", "Nenea Andrei", 2002);
let comedyMovie = movieFactory.createMovie("comedy", "KarmaComedy", "3:15", "Nenea Nicu", 2009);

movieList.addMovie(horrorMovie);
movieList.addMovie(actionMovie);
movieList.addMovie(comedyMovie);
console.log('Available movies:');
console.log(movieList.getAllMovies());
console.log('Removing the horror movie');
movieList.removeMovie(comedyMovie);
console.log('Available movies after deleting horror movie:');
console.log(movieList.getAllMovies());
