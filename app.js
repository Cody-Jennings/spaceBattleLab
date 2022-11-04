class Hero {
    constructor(hull, firepower, accuracy) {
    this.hull= hull;
    this.firepower= firepower;
    this.accuracy= accuracy;
}

attack() {
    if (Math.random() < this.accuracy) {
        console.log("Direct hit on the Aliens!")
    } else{
        console.log("Hit Missed!")
    }
}
}

const USS_Terminator = new Hero(20, 5, .7)

class Alien {
    constructor() {
      this.hull = Math.floor(Math.random()*(3+1))+18;
      this.firepower = Math.floor(Math.random()*(4-2+1))+2;
      this.accuracy = eval((Math.random() * .2 + .6).toFixed(2));
      this.isAlive = true;
    }
    attack() {
        if (Math.random() < this.accuracy) {
            console.log("You have survived the humans strike and have attacked them!")
        } else{
            console.log("Your strike has missed the humans!")
        }
    }
    }

const alienShip1 = new Alien(Math.floor(Math.random()*(3+1))+18, Math.floor(Math.random()*(4-2+1))+2, eval((Math.random() * .2 + .6).toFixed(2)))
const alienShip2 = new Alien(Math.floor(Math.random()*(3+1))+18, Math.floor(Math.random()*(4-2+1))+2, eval((Math.random() * .2 + .6).toFixed(2)))
const alienShip3 = new Alien(Math.floor(Math.random()*(3+1))+18, Math.floor(Math.random()*(4-2+1))+2, eval((Math.random() * .2 + .6).toFixed(2)))
const alienShip4 = new Alien(Math.floor(Math.random()*(3+1))+18, Math.floor(Math.random()*(4-2+1))+2, eval((Math.random() * .2 + .6).toFixed(2)))
const alienShip5 = new Alien(Math.floor(Math.random()*(3+1))+18, Math.floor(Math.random()*(4-2+1))+2, eval((Math.random() * .2 + .6).toFixed(2)))
const alienShip6 = new Alien(Math.floor(Math.random()*(3+1))+18, Math.floor(Math.random()*(4-2+1))+2, eval((Math.random() * .2 + .6).toFixed(2)))

let alienFleet = [alienShip1, alienShip2, alienShip3, alienShip4, alienShip5, alienShip]
let alienCount = alienFleet.length

for (let i = 0; i < enemyNums; i++) {
    enemies.push(new Alien)
}

const AlienShip = new Alien()

USS_Terminator.attack()
AlienShip.attack()




class Game {
    constructor() {
        this.humanShip = new PlayerShip()
        this.enemyShips = []
    }

    gameSetup(){
        for( let i = 0; i < 6; i++) {
            this.enemyShips[i] = new AlienShip()
        }
    }

    startBattle() {

    }

    checkAlienHP(){

    }

    checkPlayerHP(){

    }

    checkIfPlayerWins(){

    }
    
    checkifPlayerWantsToContinue(){
        
    }
    sendOutFollowingAlien(){

    }
}








//ship battle object
// const shipbattle = (USS_Terminator, AlienShip) => {
//     while (USS_Terminator.isAlive && AlienShip.isAlive) {
//         USS_Terminator(AlienShip);
//         if (AlienShip.isAlive) {
//             AlienShip.attack(USS_Terminator);
//         }
//     }
// }
// shipbattle()







//   You attack the first alien ship
//   If the ship survives, it attacks you
//   If you survive, you attack the ship again
//   If it survives, it attacks you again ... etc
//   If you destroy the ship, you have the option to attack the next ship or to retreat
//   If you retreat, the game is over, perhaps leaving the game open for further developments or options
//   You win the game if you destroy all of the aliens
//   You lose the game if you are destroyed


//    create alien/player ships and action of battle with properties which are objects
//    create conditional statements on attacking in turn with if else statments if the either ship survives
//    creat conditional for keep attacking or retreating
//    after each attack display remaining hull points
//    display messages for being hit/hit enemy ship your success or failure against the enem
