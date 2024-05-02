// Function to play the coin toss game
function playCoinToss() {
    const min = 10;

    // Check if the user has enough money to play
    if (money.getBalance() < min) {
        alert("Sorry! You do not have enough money!");
        return;
    }

    let playAgain = true;

    while (playAgain) {
        // Prompt the user to enter their bet amount
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

        // Deduct the bet amount from the user's money
        money.subMoney(bet);
        updateDisplay();

        // Prompt the user to select "heads" or "tails"
        let ans;
        do {
            ans = prompt("Select 'heads' or 'tails'");
        } while (ans !== "heads" && ans !== "tails");

        // Perform the coin toss
        let result = Math.random() < 0.5 ? "heads" : "tails";

        // Check if the user wins and update money accordingly
        if (result === ans) {
            money.addMoney(bet * 2);
            alert("Congratulations! You win! The result is " + result + "!");
        } else {
            alert("Sorry! You lose! The result is " + result + ".");
        }

        // Ask the user if they want to play again
        playAgain = confirm("Do you want to play again?");
    }

    // Ask the user if they want to switch to another game
    let switchGame = confirm("Do you want to switch to another game?");
    if (switchGame) {
        alert("Redirecting to another game...");
    } else {
        alert("Thank you for playing! Enjoy your day!");
    }
}

// Add event listener to the coin option container
document.getElementById("coin").addEventListener("click", playCoinToss);

