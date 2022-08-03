const { Animal } = require('./animal.js');

class Snake extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    
        
    }
    play() {
        this.nutrition -= 25;
        this.hydration -= 25;
        this.excitement += 15;
        this.health += 10;
        this.stamina -= 10;

        console.log()
        console.log(`${this.name} is having a nice slither.`);
        console.log()
        return this;
    }

    feed() {
        this.health += 5;
        this.nutrition += 5;
        this.excitement -= 5;
        
        console.log()
        console.log(`${this.name} loves the taste dead hamster!`);
        console.log()
        return this;
    }

    drink() {
        this.health += 5;
        this.hydration += 5;
        this.excitement -= 5;

        console.log()
        console.log(`${this.name} is drinking some water!`);
        console.log()
        return this;
    }
}

module.exports = { Snake };