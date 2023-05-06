# LAB2_TMPS - 
## Taks:Build an app where use the pattern .
## Theory about  the pattern:
### * The prototype pattern is a creational design pattern in software development. It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects.
### * Singleton pattern restricts the instantiation of a class and ensures that only one instance of the class exists in the Java Virtual Machine. The singleton class must provide a global access point to get the instance of the class. Singleton pattern is used for logging, drivers objects, caching.
### * The abstract factory pattern in software engineering is a design that provides a way to create families of related objects without imposing their concrete classes, by encapsulating a group of individual factories that have a common theme without specifying their concrete classes.
### 1. The prototype pattern for creating movie objects:
- Constructor method that initializes the properties of a movie object
'''
constructor(title, duration, director, year) {
    this.title = title,
    this.duration = duration,
    this.director = director,
    this.year = year;
  }
'''
