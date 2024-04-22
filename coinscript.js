// Function to play the coin toss game
function playCoinToss() {
    // Deduct $10 from the user's money
    let moneyElement = document.getElementById("money");
    let currentMoney = parseInt(moneyElement.innerText.slice(1));
    if (currentMoney < 10) {
        alert("You don't have enough money to play!");
        return;
    }
    currentMoney -= 10;
    moneyElement.innerText = "$" + currentMoney;

    // Perform the coin toss
    let result = Math.random() < 0.5 ? "Heads" : "Tails";

    // Prompt the user with the result and ask if they want to play again or switch games
    let playAgain = confirm("The result is: " + result + "\nDo you want to play again?");
    if (playAgain) {
        playCoinToss();
    } else {
        let switchGame = confirm("Do you want to switch to another game?");
        if (switchGame) {
            // Redirect to another game or perform the necessary action to switch games
            // For now, let's just alert the user
            alert("Redirecting to another game...");
        } else {
            alert("Thank you for playing! Enjoy your day!");
        }
    }
}

// Add event listener to the coin option container
document.getElementById("coin").addEventListener("click", playCoinToss);

