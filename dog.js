const { Animal } = require('./animal.js');

class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name;
    }
    // Dog specific methods
    play() {
        this.health += 5;
        this.nurition -= 5;
        this.hydration -= 5;
        this.excitement += 5;
        this.stamina -= 5;

        console.log()
        console.log(`${this.name} is playing with the ball!`);
        console.log()

        return this;
    }

    feed() {
        this.health += 5;
        this.nurition - + 5;
        this.excitement - + 5;

        console.log()
        console.log(`${this.name} is enjoying some dog treats!`);
        console.log()

        return this;
    }

    drink() {
        this.health += 10;
        this.hydration - + 15;
        this.excitement - + 15;

        console.log()
        console.log(`${this.name} is drinking some water!`);
        console.log()

        return this;
    }

    speak() {
        this.excitement += 15;
        this.stamina -= 15;

        console.log()
        console.log(`${this.name} is barking at you enthusiastically`);
        console.log()

        return this;
    }

    sit() {
        this.stamina += 15;

        console.log()
        console.log(`${this.name} is sitting down and questioning your next command`);
        console.log()

        return this;
    }

}
module.exports = { Dog };