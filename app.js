
//#region Class Hero is blueprint for both sub-class/ship types
class Ship {                                                                                 //Classes are a template for creating objects
    constructor(hull, firepower, accuracy) {                                                 //Constructor is a special function that creates and initializes an object instance of a class. Parameters are arguments passed.
        this.hull = hull;                                                                    //The value of this will become the new object when a new object is created or considered a placeholder
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}

//#endregion

//#region Humans Class
class HumanShip extends Ship {                                                                  //Extends is a great method used to connect sub-classes to the parent class/Ship class.
    constructor(hull, firepower, accuracy) {
        super(hull, firepower, accuracy)                                                        // The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
    }

    attack(deadlyAlien) {                                                                       //deadly alien is placeholder. Attack is the function or method because it is inside class.
        if (this.checkAccuracy(this.accuracy)) {
            deadlyAlien.hull -= this.firepower
            console.log(`Player hit ${deadlyAlien.name}!\n${deadlyAlien.name} has ${deadlyAlien.hull} hull points left.`)
        } else {
            console.log("Player missed the aliens! Prepare for another attack!")
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
        if (this.checkAccuracy(this.accuracy)) {
            humanPlayer.hull -= this.firepower
            console.log(`Aliens have hit the player ship!\nPlayer ship has ${humanPlayer.hull} hull points left.`)
        } else {
            console.log("Aliens have missed the humans! Will Smith is just too good of a pilot!")
        }
        return humanPlayer.hull
    }

    checkAccuracy(accuracy) {
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

//#endregion

//#region GameBoard
class GameBoard {
    constructor() {
        this.player = new HumanShip(20, 5, .7);
        this.arrayOfAliens = this.makeAliens();
    }
        
    displayIntro() {
        console.log("Earth has been attacked by a horde of aliens! You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them with your lasers. There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.\n\n********* To begin this mission with utmost haste follow the on-screen prompts. *********")
    }

    retreat() {
        console.log("We are tactfully retreating to ensure maximum alien decimation upon our return!!!!\nYou have chose to regroup and change tactics. Until next time...") 
            
        
    }

    playRound(player, alien) {                                 //function encompassing the playround  
        let winnerOfRound;
        while (true) {
            let playerResult = player.attack(alien)
            if (playerResult <= 0) {
                winnerOfRound = "player!"
                console.log("Player destroys the enemy ship and wins this round.")
                return winnerOfRound
            }
            let alienResult = alien.attack(player)
            if (alienResult <= 0) {
                winnerOfRound = "alien!"
                console.log("Alien destroys player ship and wins this round.")
                return winnerOfRound
            }
        }
    }

    resetGame() {//reset or exit game
        const response = prompt(`The mission is over. What is your next course of action Captain?\n\nEnter "r" to Reset Game or "q" to Quit Game`)
        if (response.toLowerCase() === "r") {
            console.log("Prepare to reengage the enemy!")
            location.reload()
        } else if (response.toLowerCase() === "q") {
            console.log("Will return another time to destroy the aliens!")
        } else {
            alert(`Please try again!`)
        }
    }




    engageOrRetreat() {
        const response = prompt(`What is your next course of action Captain?\n\nPress any key besides "r" to Engage Enemy or press "r" to Retreat.`)
        if (response.toLowerCase() === "r") {
            console.log("Engage thrusters to max power! We are tactfully retreating for now!!\n\nYou have safely retreated from the battlefield!")
            return true
        } else if (response.toLowerCase() === "e") {
            return false
        }
    }

    pickTarget() {                                                                              //function to return last index in alien array
        return this.arrayOfAliens[this.arrayOfAliens.length - 1]
    }

    makeAliens() {                                                                             //loops through alien array 6 times
        let alienArray = []
        for (let i = 6; i > 0; i--) {
            alienArray.push(new AlienShip(`Alien Ship #${i}`))
        }
        return alienArray
    }

    isThereAWinner() {
        let player = this.player
        let winnerOfGame;
        
        while (winnerOfGame != "alien" || alienArray.length != 0) {         //while loop 
            let response = this.engageOrRetreat()
            let alien = this.pickTarget()
            
            if(response) {
                winnerOfGame = "alien!"
                this.gameOver(winnerOfGame)
                return
            } else {winnerOfGame = this.playRound(player, alien)
            }                           
            
            if (winnerOfGame == "alien!") {
                return this.gameOver(winnerOfGame)                                              //This means that the alien won the game
            }

            this.arrayOfAliens.pop()                                                             //The pop() method removes the last element from an array and returns that element. This method changes the length of the array. 

            if (this.arrayOfAliens.length == 0) {
                return this.gameOver(winnerOfGame)                                               //This means killed all enemys in array player won
            } 
        }
    }

    gameOver(winnerOfGame) {                                                                     // function that logs the winner of the game message using template literals
        console.log(`Winner of the game is the ${winnerOfGame}.`)
        return       
    }
}


let startGameBtn = document.querySelector("#myBtn")
startGameBtn.addEventListener("click", function(e){
let test = new GameBoard()
test.displayIntro()
test.isThereAWinner()
test.resetGame()
})





// test.displayIntro()
// test.isThereAWinner()
// test.resetGame()

//fix retreat function so no more 

//start game button needs event listener function to start game with action prompt for player  


//can clicking cancleq in alert option yield a desired resulte

//reset game if have time

//#endregion
