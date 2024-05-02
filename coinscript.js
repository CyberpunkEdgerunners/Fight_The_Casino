let playAgain = true;
let ans;

function playCoinToss() {
    const min = 10;

    // Check if user has enough money to play
    if (money.getBalance() < min) {
        alert("Sorry! You do not have enough money!");
        return;
    }

    // Prompt for bet amount
    let bet = -1;
    while (bet < 10 || bet > 100 || isNaN(bet)) {
        bet = parseInt(prompt("Enter your bet amount ($10 to $100):"), 10);

        if ((isNaN(bet) || bet < 10 || bet > 100) && bet !== 0) {
            alert("Invalid bet amount. Please enter a value between $10 and $100.");
        }

        if (bet === 0) {
            return;
        }
    }

    // Subtract bet amount from user's balance
    money.subMoney(bet);

    // Prompt the user to pick "heads" or "tails"
    do {
        ans = prompt("Select 'heads' or 'tails'");
    } while (ans !== "heads" && ans !== "tails");

    // Perform the coin toss
    const result = Math.random() < 0.5 ? "heads" : "tails";

    // Check if the user wins and update balance accordingly
    if (result === ans) {
        money.addMoney(bet * 2);
        alert("You won! The result is " + result + "!");
    } else {
        alert("You lost! The result is " + result + "!");
    }

    // Ask if user wants to play again
    //playAgain = confirm("Do you want to play again?");
}

// Add event listener to the coin option container
document.getElementById("coin").addEventListener("click", playCoinToss);

