class Animal {
constructor(name) {
    this.name = name;
    this.health = 50;
    this.nutrition = 50;
    this.hydration = 50;
    this.excitement = 50;
    this.stamina = 50;
}

sleep() {
    this.health += 10;
    this.nutrition -= 10;
    this.hydration -= 10;
    this.stamina += 10;
    console.log(`${this.name} is feeling well rested after a sleep 'Zzz'.`);
    return this;
}
petStatus() {
    return console.table({
        name: this.name,
        health: this.health,
        nutrition: this.nutrition,
        hydration: this.hydration,
        excitement: this.excitement,
        stamina: this.stamina,
    });
}
}

module.exports = { Animal };