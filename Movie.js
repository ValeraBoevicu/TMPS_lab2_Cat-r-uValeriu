
// Prototype pattern for creating movie objects
class Movie {
    constructor(title, duration, director, year) {
        this.title = title,
            this.duration = duration,
            this.director = director,
            this.year = year;
    }

    printDetails() {
        console.log(`${this.title} (${this.year}) directed by ${this.director},duration: ${this.duration}`);
    }
}



export class ActionMovie extends Movie {
    constructor(title, duration, director, year) {
        super(title, duration, director, year);
        this.type = "action";
    }
}

export class ComedyMovie extends Movie {
    constructor(title, duration, director, year) {
        super(title, duration, director, year);
        this.type = "comedy";
    }
}

export class HorrorMovie extends Movie {
    constructor(title, duration, director, year) {
        super(title, duration, director, year);
        this.type = "horror";
    }
}