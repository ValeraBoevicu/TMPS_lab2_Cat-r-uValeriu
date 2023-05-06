# LAB2_TMPS
## Taks:Build an functional where use the pattern .
## Theory about the patterns:
### * The prototype pattern is a creational design pattern in software development. It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects.
### * Singleton pattern restricts the instantiation of a class and ensures that only one instance of the class exists in the Java Virtual Machine. The singleton class must provide a global access point to get the instance of the class. Singleton pattern is used for logging, drivers objects, caching.
### * The abstract factory pattern in software engineering is a design that provides a way to create families of related objects without imposing their concrete classes, by encapsulating a group of individual factories that have a common theme without specifying their concrete classes.
### 1. The prototype pattern for creating movie objects:
- Constructor method that initializes the properties of a movie object
```
constructor(title, duration, director, year) {
    this.title = title,
    this.duration = duration,
    this.director = director,
    this.year = year;
  }
```
- Method that logs a string representation of the movie object to the console
```
printDetails() {
    console.log(`${this.title} (${this.year}) directed by ${this.director}, duration: ${this.duration}`);
  }
}
```
```
export class ActionMovie extends Movie {
    constructor(title, duration, director, year) {
        super(title, duration, director, year);
        this.type = "action";
    }
}
```
-- Here we have an example where I used the prototype pattern, for example I have 2 types of movies, such as action and comedy, and in order not to write another code for comedy I only indicated the type of movie.
```
export class ComedyMovie extends Movie {
    constructor(title, duration, director, year) {
        super(title, duration, director, year);
        this.type = "comedy";
    }
}
```
### 2. Singleton pattern for managing the list of movies:
- Constructor method that is called when a new MovieList object is created
```
constructor() {
```
- If a MovieList instance already exists, return the existing instance
```
if (MovieList.instance) {
            return MovieList.instance;
        }
```
- Method for adding a movie to the list
```
 addMovie(movie) {
        this.movies.push(movie);
    }
```
- This code defines a class called MovieList that uses the Singleton pattern to ensure that only one instance of the class is created. The class has methods for adding and removing movies from a list, and for retrieving all the movies in the list.
### 3. Abstract Factory pattern for creating different types of movies:
- Defines a createMovie() method on the MovieFactory class, which takes in parameters for the type, title, duration, director, and year of a movie.
```
createMovie(type, title, duration, director, year) {
```
- Use a switch statement to create and return a new instance of a specific type of movie based on the value of the type parameter. If an invalid type is provided, it logs an error message to the console.
```
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
```



