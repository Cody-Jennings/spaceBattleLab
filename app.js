
//#region Class Hero is blueprint for both sub-class/ship types
class Ship {                                                    //Classes are a template for creating objects
    constructor(hull, firepower, accuracy) {                   //Constructor is a special function that creates and initializes an object instance of a class. Parameters are arguments passed.
        this.hull = hull;                                     //The value of this will become the new object when a new object is created or considered a placeholder
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}
//#endregion

//#region Humans Class
//Extends is a great method used to connect sub-classes to the parent class/Ship class.
class HumanShip extends Ship {
    constructor(hull, firepower, accuracy) {
        super(hull, firepower, accuracy)  // The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
    }
    attack(deadlyAlien) {  //deadly alien is placeholder. Attack is the function or method because it is inside class.
        if (this.checkAccuracy(this.accuracy)) {
            deadlyAlien.hull -= this.firepower
            console.log(`We hit ${deadlyAlien.name}!\n${deadlyAlien.name} has ${deadlyAlien.hull} hull points left.`)
        } else {
            console.log("We missed the aliens! Prepare for another attack!")
        }
        return deadlyAlien.hull
    }
    checkAccuracy(accuracy) {
        let check = Math.random()
        if (check < accuracy) {
            return true
        } else {
            return false
        }
    }
}

//#endregion

//#region  Aliens Class
class AlienShip extends Ship {
    constructor(name) {
        super()
        this.name = name;
        this.hull = this.randomNumberMaker();
        this.firepower = this.randomNumberMaker2();
        this.accuracy = this.randomNumberMaker3();
    }
    attack(humanPlayer) {                                                                       //humanPlayer is placeholder
        if (this.checkAccuracy(this.accuracy)) {                                                //
            humanPlayer.hull -= this.firepower
            console.log(`We hit the player ship!\nPlayer ship has ${humanPlayer.hull} hull points left.`)
        } else {
            console.log("We have missed the humans! Will Smith is just to good a pilot!")
        }
        return humanPlayer.hull
    }
    checkAccuracy(accuracy) {   //
        let check = Math.random()
        if (check < accuracy) {
            return true
        } else {
            return false
        }
    }

    randomNumberMaker = (x, y) => {
        let z = Math.floor(Math.random() * 4) + 3;
        return z
    }
    
    randomNumberMaker2 = (x, y) => {
        let z = Math.floor(Math.random() * 3) + 2;
        return z
    }
    
    randomNumberMaker3 = (x, y) => {
        let z = Math.floor(Math.random() * 3) + 6 / 10;
        return z
    }
}

class GameBoard {
    constructor() {
        this.player = new HumanShip(20, 5, .7);
        this.arrayOfAliens = this.makeAliens();
    }

    playRound(player, alien) {         //function encompassing the playround  
        let winnerOfRound;
        while (true) {
            let playerResult = player.attack(alien)
            if (playerResult <= 0) {
                winnerOfRound = "player!"
                console.log("Player destroys the enemy ship and wins this round")
                return winnerOfRound
            }
            let alienResult = alien.attack(player)
            if (alienResult <= 0) {
                winnerOfRound = "alien"
                console.log("Alien destroys player ship wins this round")
                return winnerOfRound
            }
        }
    }

    retreat(player) {
        let retreat = Math.random()
        if (retreat > .7) {   // retreat will happen 30% of the time because greater than .7
            console.log("I am retreating, my hull value will be at max strength for the next round!")
            player.hull = 20
        } else {
            console.log("These colors dont run!")  // 70% likely when retreat function runs
        }
        return
    }

    pickTarget() {    //function to return last index in alien array
        return this.arrayOfAliens[this.arrayOfAliens.length - 1]
    }
    gameOver(winner) {      //function to log the winner of the game
        console.log(`${winner} won the game!`)
    }

    makeAliens() {
        let alienArray = []
        for (let i = 6; i > 0; i--) {
            alienArray.push(new AlienShip(`Alien Ship #${i}`))  
        }
        return alienArray
    }

    isThereAWinner() {    //function to 
        let player = this.player //new humanship object with specific properties
        let winnerOfGame;
        while (winnerOfGame != "alien" || enemyArr.length != 0) {                      //while loop 
            let alien = this.pickTarget()
            let winnerOfGame = this.playRound(player, alien)
            if (winnerOfGame == "alien") {
                return this.gameOver(winnerOfGame)                                          //This means that the alien won the game
            }

            this.arrayOfAliens.pop()                                                             //The pop() method removes the last element from an array and returns that element. This method changes the length of the array. 


            if (this.arrayOfAliens.length == 0) {
                return this.gameOver(winnerOfGame)                                               //This mean killed all enemys in array terminator won
            }

            this.retreat(player)                                                              //Calling the retreat function
        }
    }
    gameOver(winnerOfGame) {                                                    // function that logs the winner of the game message using template literals
        console.log(`Winner of the game is the ${winnerOfGame}.`)
        return
    }


}

let test = new GameBoard()
test.isThereAWinner()

//#endregion

//#region  Random Number Function
//Created a function for each alien class parameter. Function is called when making new alien ships
// let randomNumberMaker = (x, y) => {
//     let z = Math.floor(Math.random() * 4) + 3;
//     return z
// }

// let randomNumberMaker2 = (x, y) => {
//     let z = Math.floor(Math.random() * 3) + 2;
//     return z
// }

// let randomNumberMaker3 = (x, y) => {
//     let z = Math.floor(Math.random() * 3) + 6 / 10;
//     return z
// }

//#endregion

//#region Game Object




//#endregion






