import { ActionMovie } from "./Movie.js";
import { ComedyMovie } from "./Movie.js";
import { HorrorMovie } from "./Movie.js";
// Abstract Factory pattern for creating different types of movies
export class MovieFactory {
    createMovie(type, title, duration, director, year) {
        switch (type) {
            case "action":
                return new ActionMovie(type, title, duration, director, year);
            case "comedy":
                return new ComedyMovie(type, title, duration, director, year);
            case "horror":
                return new HorrorMovie(type, title, duration, director, year);
            default:
                console.log('No type founded');
        }
    }
}