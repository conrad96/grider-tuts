class pet {
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    eat()
    {
        return `${this.name} is eating.`
    }
}

class cat extends pet {
    constructor(name, age, lives = 9)
    {   
        super(name, age);     
        this.lives = lives;
    }

    meow(){
        return `${this.name} is MEOWWWING.`
    }

    livesLeft(){
        return `${this.name} has ${this.lives} lives left`
    }
}
class dog extends pet {
    
    bark(){
        return `${this.name} is barking`;
    }
}

let c = new cat('jef', 5, 7);
let d = new dog('Mike', 6);

//console.log(d.bark());
console.log(c.livesLeft());