//stats
let player = {
    health:     100
};
let enemy = {
    health:     100
};

//variables
let cmoney = 1000;
let pmoney = cmoney;

//flags
let Xtralife = true;

//functions 
function stats() {
//used to update player and enemy stats in .html
}

function check() {
//check money, if conditions met run proper functions
//===========pseudo==================
//lost casino game
if(cmoney = pmoney - 100) fightback();
//lost all money, but still have Xtralife
else if(cmoney <= 0 && Xrtalife == true) secondchance();
//lost all money and no Xtralife
else if(cmoney <= 0 && Xrtalife == false) gameover();
//earned enough and can pay off debt
else if(cmoney >= 1000) payoff();
}

function fightback() {
//offer user chance to fight back after losing casino game
//text that gives option of starting fighting game or 
//returning to casino to continue playing if possible
}

function secondchance() {
//offer user 1 chance to fight back after losing all money
//text that gives user one chance to fight back or gameover
//only offered once and will automatic gameover if called
//again
Xtralife = false;
}

function gameover() {
//inform user they lost all their money
//text explaining user disappeared after failing to 
//to repay their debt
//only option is to restart or leave page
}

function payoff() {
//inform user they repaid debt 
//text explaining user repaid their debt and never returned
//to shady casino
//only option is to restart or leave page
}

function fight() {
//function that starts the fighting game
}

function ladyluck(min, max) {
//random number generator
    return min + Math.floor(Math.random() * (max - min + 1));
}

function roll() {
//attack function
    let d1 = ladyluck(1, 6);
    let d2 = ladyluck(1, 6);
    let damage = d1 + d2;
    enemy.health -= damage;
    //enemy lost {$damage} health
    d1 = ladyluck(1, 6);
    d2 = ladyluck(1, 6);
    damage = d1 + d2;
    player.health -= damage;
    //player lost {$damage} health
    //stats();
    if(player.health <= 0) {
        cmoney -= 100;
        //player lost $100 ... again
    }
    else if(enemy.health <= 0) {
        cmoney += 100;
        //player won back $100
    }
}
