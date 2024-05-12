//stats
let player = {
    health:     50
};
let enemy = {
    health:     50
};

//variables
let cash = money.getBalance();
//let pmoney = money before start of betting

//flags
let Xtralife = true;
let second = false;

//functions 
function stats() {
//used to update player and enemy stats in .html
}

function check() {
//check money, if conditions met run proper functions
cash = money.getBalance();
//lost all money and no Xtralife
if(cash <= 0 && Xtralife == false) gameover();
//lost all money, but still have Xtralife
else if(cash <= 0 && Xtralife == true) secondchance();
//earned enough and can pay off debt
else if(cash >= 1000) payoff();
//lost casino games
else if(cash <= milestone) {
    milestone = cash - 100;
    fightback();
}
else if(cash >= milestone + 100) {
    milestone = cash - 100;   
}
}


function fightback(choice) {
//offer user chance to fight back after losing casino game
//text that gives option of starting fighting game or 
//returning to casino to continue playing if possible
alert("That casino worker just stole your hard-earned money! Are you gonna let them do that or are you going to fight back?");
$(span1).html(`<button onclick="fight()">Fight Back!</button>`);
$(span2).html(``);
if(choice == true) {
    $(span3).html(`<button onclick="gameover()">Runaway!</button>`);
}
 else $(span3).html(`<button onclick="runaway()">Runaway!</button>`);
}

function runaway() {
//player ran away from the fightback fight
//return to normal casino menu
$(span1).html(`<button onclick="money.subMoney(100)">Lose $100</button>`);
$(span2).html(`<button onclick="money.setBalance(1000)">Win Game</button>`);
$(span3).html(`<button onclick="money.setBalance(0)">Lose Game</button>`);
}

function secondchance() {
//offer user 1 chance to fight back after losing all money
//text that gives user one chance to fight back or gameover
//only offered once and will automatic gameover if called
//again
Xtralife = false;
second = true;
fightback(second);
alert("You're broke. This is your last chance to make some money. Either beat him and take his money, or get out!");
}

function gameover() {
//inform user they lost all their money
//text explaining user disappeared after failing to 
//to repay their debt
//only option is to restart or leave page
$(slot).remove();
$(coin).remove();
$(russian).remove();
$("h2").html("You've lost, either refresh or leave!");
$(span1).html(``);
$(span2).html(``);
$(span3).html(``);
}

function payoff() {
//inform user they repaid debt 
//text explaining user repaid their debt and never returned
//to shady casino
//only option is to restart or leave page
$(slot).remove();
$(coin).remove();
$(russian).remove();
$("h2").html("You've won, either refresh or leave!");
$(span1).html(``);
$(span2).html(``);
$(span3).html(``);
}

function fight() {
    $(span1).html(``);
    $(span2).html(`<button onclick="roll()">Fight!</button>`);
    $(span3).html(``);
}

function ladyluck(min, max) {
//random number generator
    return min + Math.floor(Math.random() * (max - min + 1));
}

function roll() {
//attack function
    let d1 = ladyluck(1, 6) + ladyluck(1,6);
    enemy.health -= d1;
    //enemy lost {$damage} health
    let d2 = ladyluck(1, 6) + ladyluck(1,6);
    player.health -= d2;
    //player lost {$damage} health
    //stats();
    const verbs = ["tickled", "nudged", "zapped", "bopped", "poked", "whacked", "stabbed", "squeezed", "blasted", "blugeoned", "slashed", "splashed", "smacked", "flicked", "kneed", "booted", "sniped", "splatted", "slapped", "grazed"];
    let verbIndex1 = ladyluck(0, verbs.length - 1);
    let verbIndex2 = ladyluck(0, verbs.length - 1);

    const bodyParts = ["arm", "knee", "elbow", "foot", "mouth", "hand", "shin", "thigh", "ankle", "toe", "finger", "heel", "hip", "back", "neck", "forehead", "ear", "nose", "jaw", "cheek", "belly", "bottom lip", "top lip", "groin", "clavicle", "femur", "eyelash", "glutes", "chest"];
    let bodyIndex1 = ladyluck(0, bodyParts.length - 1);
    let bodyIndex2 = ladyluck(0, bodyParts.length - 1);
    
    alert(`
    Player was ${verbs[verbIndex1]} in the ${bodyParts[bodyIndex1]}!
    Player lost ${d2} health

    The enemy was ${verbs[verbIndex2]} in the ${bodyParts[bodyIndex2]}!
    Enemy lost ${d1} health

    Player Health: ${player.health}                  Enemy Health: ${enemy.health}
    `);

    if(player.health <= 0 && second == true) gameover();
    else if(player.health <= 0) {
        money.subMoney(100);
        //player lost $100 ... again
        $(span1).html(`<button onclick="money.subMoney(100)">Lose $100</button>`);
        $(span2).html(`<button onclick="money.setBalance(1000)">Win Game</button>`);
        $(span3).html(`<button onclick="money.setBalance(0)">Lose Game</button>`);
    player.health = 100;
    enemy.health = 100;
    alert(`You got beat! You were robbed $100!`);
    }
    else if(enemy.health <= 0) {
        money.addMoney(100);
        //player won back $100
        $(span1).html(`<button onclick="money.subMoney(100)">Lose $100</button>`);
        $(span2).html(`<button onclick="money.setBalance(1000)">Win Game</button>`);
        $(span3).html(`<button onclick="money.setBalance(0)">Lose Game</button>`);
    enemy.health = 100;
    player.health = 100;
    alert(`You won! You took $100!`);
    second = false;
    }
}
