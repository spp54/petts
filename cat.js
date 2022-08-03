const { Animal } = require('./animal.js');

class Cat extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
    play() {
        this.nutrition -= 5;
        this.hydration -= 5;
        this.excitement += 5;
        this.health += 5;
        this.stamina -= 5;

        console.log()
        console.log(`${this.name} is playing with a ball of yarn!`);
        console.log()

        return this;
    }

    feed() {
        this.health += 5;
        this.nutrition += 5;
        this.excitement -= 5;

        console.log()
        console.log(`${this.name} is eating some tuna!`);
        console.log()

        return this;
    }

    drink() {
        this.health += 5;
        this.hydration += 5;
        this.excitement -= 5;

        console.log()
        console.log(`${this.name} is drinking some milk!`);
        console.log()

        return this;
    }
}

module.exports = { Cat } 