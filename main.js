const inquirer = require('inquirer');

let myPet;


async function start(Cat, Dog, Snake) {
    const { petType } = await inquirer.prompt({
        type: 'list',
        name: 'petType',
        message: "What type of pet would you like ? Please choose from below: ",
        choices: [
            {
                key: "a",
                name: "Cat",
                value: "cat",
            },
            {
                key: "b",
                name: "Dog",
                value: "dog",

            },
            {
                key: "c",
                name: "Snake",
                value: "snake",

            }
        ],
    })

    const { petName } = await inquirer.prompt({
        type: 'input',
        name: 'petName',
        message: "What would you like to name your pet?"
    });

    if (petType === 'cat') myPet = new Cat(petName);
    if (petType === 'dog') myPet = new Dog(petName);
    else if (petType === 'snake') myPet = new Snake(petName);

    userChoice();
}

// decides the choice of actions of the user
async function userChoice() {

    const { choice } = await inquirer.prompt({
        type: "list",
        name: 'choice',
        message: "What would you like to do with your pet?",
        choices: [
            {
                key: 'a',
                name: "Feed your pet",
                value: 'feed',
            },
            {
                key: 'b',
                name: "Give your pet a drink",
                value: 'drink',
            },
            {
                key: 'c',
                name: "Play with your pet",
                value: 'play',
            },
            {
                key: 'd',
                name: 'Let the pet have a nap ?',
                value: 'sleep',
            },
            {
                key: 'e',
                name: 'View your pet status report ?',
                value: 'petStatus',
            },
            {
                key: 'f',
                name: 'Do you want to quit this game?\n\n\n',
                value: 'quitGame',
            },
        ]
    })

    if (choice === 'feed') await myPet.feed();
    if (choice === 'drink') await myPet.drink();
    if (choice === 'play') await myPet.play();
    if (choice === 'sleep') await myPet.sleep();
    if (choice === 'petStatus') await myPet.petStatus(); userChoice();
    if (choice === 'quitGame') await ask4Quiting();


    if (myPet.health > 50) {
        myPet.health = 50;
    }
    if (myPet.nutrition > 50) {
        myPet.nutrition = 50;
    }
    if (myPet.hydration > 50) {
        myPet.hydration = 50;
    }
    if (myPet.excitement > 50) {
        myPet.excitement = 50;
    }
    if (myPet.stamina > 50) {
        myPet.stamina = 50;
    }
    if (myPet.health < 0) {
        myPet.health = 0;
    }
    if (myPet.nutrition < 0) {
        myPet.nutrition = 0;
    }
    if (myPet.hydration < 0) {
        myPet.hydration = 0;
    }
    if (myPet.excitement < 0) {
        myPet.excitement = 0;
    }
    if (myPet.stamina < 0) {
        myPet.stamina = 0;
    }


    /// WARNINGS -- Warn the player before they make a dangerous move
    if (myPet.health < 15) {
        console.log(`${myPet.name} is in danger of loosing too much health. Feed them or give them some water.`)
    }
    if (myPet.nutrition < 15) {
        console.log(`${myPet.name} is getting very hungry. Feed them.`)
    }
    if (myPet.hydration < 15) {
        console.log(`${myPet.name} is getting dehydrated. Give them some water.`)
    }
    if (myPet.excitement < 15) {
        console.log(`${myPet.name} is getting very bored. Try playing with them, or giving them some exercise.`)
    }
    if (myPet.stamina < 15) {
        console.log(`${myPet.name} is loosing a lot of stamina. Maybe let them rest a little.`)
    }



    /// DEATH RANGE -- Triger start game if pet dies
    if (myPet.nutrition === 0 && myPet.hydration === 0) {
        console.log(`\n${myPet.name} is dead. They got too hungry and too dehydrated.\n
        Choose another pet type to play again...\n
        `)
        main();
    }
    if (myPet.health === 0) {
        console.log(`\n${myPet.name} is dead. You let their health fall too low.\n
        Choose another pet type to play again...\n`);
        main();
    }
    else if (myPet.nutrition === 0) {
        console.log(`\n${myPet.name} is dead. You let them get too hungry.\n
        Choose another pet type to play again...\n`);
        main();
    }
    else if (myPet.hydration === 0) {
        console.log(`\n${myPet.name} is dead. They died of dehydration.\n
        Choose another pet type to play again...\n`);
        main();
    }
    else if (myPet.excitement === 0) {
        console.log(`\n${myPet.name} is dead. They died of boredom.\n
        Choose another pet type to play again...\n`);
        main();
    }
    else if (myPet.stamina === 0) {
        console.log(`\n${myPet.name} is dead. Their stamina got too low and they died of exhaustion.\n
        Choose another pet type to play again...\n`);
        main();
    }

    myPet.petStatus();
}

// the function for quitting
async function ask4Quiting() {
    const { quitList } = await inquirer.prompt({
        type: "list",
        name: 'quitList',
        message: " Giving away your pet already ?",
        choices: [
            {
                key: 'a',
                name: "Yes",
                value: true,
            },
            {
                key: 'b',
                name: "No",
                value: false,
            },

        ]
    })
    if (quitList == true) {
        main();
    }
    else if (quitList == false) {
        userChoice();
    }
}

// the main function
async function main() {
    const { Cat } = require("./cat.js");
    const { Dog } = require("./dog.js");
    const { Snake } = require("./snake.js");
    start(Cat, Dog, Snake);

}
main();
