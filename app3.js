
// class Hero {
//     constructor(hull, firepower, accuracy) {
//     this.hull= hull;
//     this.firepower= firepower;
//     this.accuracy= accuracy;
//     this.isAlive = true
// }

// attack() {
//     if (Math.random() < this.accuracy) {
//         console.log("Direct hit on the Aliens!")
//     } else{
//         console.log("Hit Missed!")
//     }
// }
// }

// const USS_Terminator = new Hero(20, 5, .7)

// class Alien {
//     constructor() {
//       this.hull = Math.floor(Math.random()*(3+1))+18;
//       this.firepower = Math.floor(Math.random()*(4-2+1))+2;
//       this.accuracy = eval((Math.random() * .2 + .6).toFixed(2));
//       this.isAlive = true;
//     }
//     attack() {
//         if (Math.random() < this.accuracy) {
//             console.log("You have survived the humans strike and have attacked them!")
//         } else{
//             console.log("Your strike has missed the humans!")
//         }
//     }
//     }

// const alienShip1 = new Alien(Math.floor(Math.random()*(3+1))+18, Math.floor(Math.random()*(4-2+1))+2, eval((Math.random() * .2 + .6).toFixed(2)))
// const alienShip2 = new Alien(Math.floor(Math.random()*(3+1))+18, Math.floor(Math.random()*(4-2+1))+2, eval((Math.random() * .2 + .6).toFixed(2)))
// const alienShip3 = new Alien(Math.floor(Math.random()*(3+1))+18, Math.floor(Math.random()*(4-2+1))+2, eval((Math.random() * .2 + .6).toFixed(2)))
// const alienShip4 = new Alien(Math.floor(Math.random()*(3+1))+18, Math.floor(Math.random()*(4-2+1))+2, eval((Math.random() * .2 + .6).toFixed(2)))
// const alienShip5 = new Alien(Math.floor(Math.random()*(3+1))+18, Math.floor(Math.random()*(4-2+1))+2, eval((Math.random() * .2 + .6).toFixed(2)))
// const alienShip6 = new Alien(Math.floor(Math.random()*(3+1))+18, Math.floor(Math.random()*(4-2+1))+2, eval((Math.random() * .2 + .6).toFixed(2)))

// //let alienFleet = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6]
// let alienCount = alienFleet.length

// // attack() {
// //     USS_Terminator.attack(alienFleet[0])
// //     alienFleet[0].attack(USS_Terminator)
// // }
// // alienFleet.shift()

// const AlienShip = new Alien()

// USS_Terminator.attack()
// AlienShip.attack()




// // class Game {
// //     constructor() {
// //         this.humanShip = new PlayerShip()
// //         this.enemyShips = []
// //     }

// //     gameSetup(){
// //         for( let i = 0; i < 6; i++) {
// //             this.enemyShips[i] = new AlienShip()
// //         }
// //     }

// //     startBattle() {
// //         while((this.checkPlayerHP()) && (this.checkAlienHP())){//USS_Terminator.attack(alienFleet[0])
//     //alienFleet[0].attack(USS_Terminator)
// //             console.log("USS_Terminator locks on to ALien Ship")
// //             this.humanShip.attack(this.enemyShips[0])
// //             console.log(`Alien has ${this.enemyShips[0].hull} left`)
// //             console.log("Alien takes aim at USS_Terminator")
// //             this.enemyShips[0].attack(this.humanShip)
// //             console.log(`USS_Terminator has ${this.humanShip.hull} left`)
// //         }
// //         if(this.checkAlienHP() == false){
// //             console.log("USS_Terminator has defeated an alien ship")
// //         }else if(this.checkPlayerHP() == false){
// //             console.log("Aliens have destroyed the USS_Terminator")
// //         }
// //     }

// //     checkAlienHP(){
// //         if(this.enemyShips[0].hull > 0){
// //             return true
// //         }else{
// //             return false
// //         }
// //     }

// //     checkPlayerHP(){
// //         if(this.humanShip.hull > 0){
// //             return true
// //         }else{
// //             return flase
// //         }
// //     }

// //     checkIfPlayerWins(){//after beating 1 ship
// //         if(! this.enemyShip){
// //             console.log(`USS_Terminator defeats ${alienShip[]}`)
// //         }
// //     }

// //     checkifPlayerWantsToContinue(){//input from user

// //     }

// //     playerretreat(){

// //     }
// //     sendOutFollowingAlien(){
// //         this.enemyShips.shift()
// //     }

// //     areThereAnyMoreAlien(){

// //     }
// // }









// //ship battle object
// // const shipbattle = (USS_Terminator, AlienShip) => {
// //     while (USS_Terminator.isAlive && AlienShip.isAlive) {
// //         USS_Terminator(AlienShip);
// //         if (AlienShip.isAlive) {
// //             AlienShip.attack(USS_Terminator);
// //         }
// //     }
// // }
// // shipbattle()







// //   You attack the first alien ship
// //   If the ship survives, it attacks you
// //   If you survive, you attack the ship again
// //   If it survives, it attacks you again ... etc
// //   If you destroy the ship, you have the option to attack the next ship or to retreat
// //   If you retreat, the game is over, perhaps leaving the game open for further developments or options
// //   You win the game if you destroy all of the aliens
// //   You lose the game if you are destroyed


// //    create alien/player ships and action of battle with properties which are objects
// //    create conditional statements on attacking in turn with if else statments if the either ship survives
// //    creat conditional for keep attacking or retreating
// //    after each attack display remaining hull points
// //    display messages for being hit/hit enemy ship your success or failure against the enem


// // attack(meanAlien) {
// //     if (this.hull > 0) {
// //         if (Math.random() < this.accuracy ) {
// //              if (meanAlien.hull -= this.firepower) {
// //             console.log(`This humanship attacked the alien ship they have ${meanAlien.hull} left`)
// //         }
// //         }
// //         else{
// //             console.log('Earthship attack missed!')
// //         }


// //     }

// //     else {
// //         for (let i = 0; i < alienArr.length; i++) {
// //             if (alienArr[i].hull < 3) {
// //                console.log("Continue attack or Retreat") 
// //             }

// //         }
// //     }


// // }

// // }





//let alienFleet = [] // Alien Array

// Class Hero is blueprint for both sub-class/ship types
class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}
//#region Humans Class
//Extends is a great method used to connect sub-classes to the parent class/Ship class.
class HumanShip extends Ship {
    constructor(hull, firepower, accuracy) {
        super(hull, firepower, accuracy)  // The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
    }
    attack(deadlyAlien) {  //deadly alien is placeholder
        if (this.checkAccuracy(this.accuracy)) {
            deadlyAlien.hull -= this.firepower
            console.log("I hit the enemy ship!")
        }else{
            console.log("Dang I missed")
        }
        return deadlyAlien.hull
    }
    checkAccuracy(accuracy) {
        let check = Math.random()
        if (check < accuracy) {
            return true
        }else{
            return false
        }
    }   
}   

//#endregion

//#region  Aliens Class
class AlienShip extends Ship {
    constructor(hull, firepower, accuracy) {
        super(hull, firepower, accuracy)
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy
    }
    attack(humanPlayer) {  //deadly alien is placeholder
        if (this.checkAccuracy(this.accuracy)) {  //
            humanPlayer.hull -= this.firepower
            console.log("I hit the human ship!")
        }else{
            console.log("Dang I missed the humans")
        }
        return humanPlayer.hull
    }
    checkAccuracy(accuracy) {   //
        let check = Math.random()
        if (check < accuracy) {
            return true
        }else{
            return false
        }
    }   
}

//#endregion

//#region  Random Number Function
//created a function for each alien class paramater. Function is called when making new alien ships
let randomNumberMaker = (x, y) => {
    let z = Math.floor(Math.random() * 4) + 3;
    return z
}

let randomNumberMaker2 = (x, y) => {
    let z = Math.floor(Math.random() * 3) + 2;
    return z
}

let randomNumberMaker3 = (x, y) => {
    let z = Math.floor(Math.random() * 3) + 6 / 10;
    return z
}

//#endregion

//#region  Alien Ships
//called function in new ship class

// const newAlienShip1 = new AlienShip(randomNumberMaker(), randomNumberMaker2(), randomNumberMaker3());
// const newAlienShip2 = new AlienShip(randomNumberMaker(), randomNumberMaker2(), randomNumberMaker3());
// const newAlienShip3 = new AlienShip(randomNumberMaker(), randomNumberMaker2(), randomNumberMaker3());
// const newAlienShip4 = new AlienShip(randomNumberMaker(), randomNumberMaker2(), randomNumberMaker3());
// const newAlienShip5 = new AlienShip(randomNumberMaker(), randomNumberMaker2(), randomNumberMaker3());
// const newAlienShip6 = new AlienShip(randomNumberMaker(), randomNumberMaker2(), randomNumberMaker3());
//#endregion

//const USS_Schwarzenegger = new HumanShip(20, 5, .7);

//alienFleet.push(newAlienShip1, newAlienShip2, newAlienShip3, newAlienShip4, newAlienShip5, newAlienShip6);

//#region  Create a battle between USS_Schwarzenegger and the Alienships while using booleans
// const shipBattle = (aliens, USS_Schwarzenegger) => {
//     if (USS_Schwarzenegger.hull > 0 && aliens[0].hull > 0) {


//     }

//     if (aliens[0].hull > 0) {
//         aliens[0].attack(USS_Schwarzenegger)
//     }
//     if (USS_Schwarzenegger.hull > 0) {
//         USS_Schwarzenegger.attack(aliens[0])
//     }
// }
// shipBattle(alienFleet, USS_Schwarzenegger)

//#endregion

//#region Game Object


//#endregion


function playRound(player, alien) {
    let winnerOfRound;
    while (true) {
    let playerResult = player.attack(alien)
        if (playerResult <= 0) {
            winnerOfRound = "player!"
            console.log("player wins this round")
            return winnerOfRound
        }
    let alienResult = alien.attack(player)
        if (alienResult <= 0) {
            winnerOfRound = "alien"
            return winnerOfRound
        }
    }
}

function retreat(player) {
    let retreat = Math.random()
    if(retreat > .7) {
        console.log("I am retreating my hull value will be at max strength")
        player.hull = 20
    }else{
        console.log("These colors dont run!")
    }
    return
}

function pickTarget(enemyArr) {
    //console.log(`Hello ${[enemyArr.length - 1]}`)
    return enemyArr[enemyArr.length - 1]
}
function gameOver(winner){
    console.log(`${winner} won the game!`)
}

function isThereAWinner() {
    let player = new HumanShip(20, 5, .7)
    let enemyArr = []
    for(let i = 0; i < 6; i++) {
    enemyArr.push(new AlienShip(randomNumberMaker(), randomNumberMaker2(), randomNumberMaker3()));  // takes place of const alienship1-6
    }
    let winnerOfGame;
    while (winnerOfGame != "alien" || enemyArr.length != 0) {
        let alien = pickTarget(enemyArr)
        //console.log(alien)
        let winnerOfGame = playRound(player, alien)
        if (winnerOfGame == "alien") {
            return gameOver(winnerOfGame)  //this mean that the alien won the game
            }

        enemyArr.pop()
        

        if (enemyArr.length == 0) {
        return gameOver(winnerOfGame)  //this mean killed all enemys in array terminator won
        }
        
        retreat(player)
    }
}
function gameOver(winnerOfGame) {
    console.log(`Winner of the game is the ${winnerOfGame}.`)
    return
}

isThereAWinner()

// find out where the 0 


//work on retreat function










// start round{
//     attack sequence{
//         while loop (no one has been destroyed)
//         player attacks{
//             grab enemy target
//             player attack function {
//                 if flase, enemy helath remains the same
//                 if true, subtract players firpower from enemies health
//                 if they attack, is enemy destroyed? (put a function here)
//             }
//         }
//         enemy attacks {
//             alien attack function {
//                 if false, player health remains the same
//                 if true, subtract alien firepower from players health
//                 if they attack, is the enemy destroyed? (put a function here) return winner
//             }
//         }
//         is any enemy destroyed? {
//             if player is destroyed = Game Over
//         }       if alien is destroyed
//                 Are there anymore aliens in the array?
//                     if there are, pick new target
//                     restart fight sequence
//                     else, game over
//     }
// }
// winner


// if AlienShip is dead return "USS_Terminator"      then winner of round  = uss terminator   make sure attacks work subtracting correct damage
//     enemyArr.pop, this removes destroyed alienship from array
//     else alienship.attack(uss terminator)    if player ship is destroyed return "alien"