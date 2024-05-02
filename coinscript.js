// Function to play the coin toss game
function playCoinToss() {
    
    // Deduct $10 from the user's money
    //let moneyElement = document.getElementById("money");
    //let currentMoney = parseInt(moneyElement.innerText.slice(1));
    //let currentMoney = 123;
    //if (currentMoney < 10) {
    //    alert("You don't have enough money to play!");
    //    return;
    //}
    //currentMoney -= 10;
    //moneyElement.innerText = "$" + currentMoney;

    const min = 10;
    let playAgain = true;

    while (playAgain) {

        if (money.getBalance() < min) {
            alert("Sorry! You do not have enough money!");
            return;
        }

        let bet = -1;
        while (bet < 10 || bet > 100 || isNaN(bet)) {
            bet = parseInt(prompt("Enter your bet amount ($10 to $100):"), 10);

            if ((isNaN(bet) || bet < 10 || bet > 100) && bet != 0) {
                alert("Invalid bet amount. Please enter a value between $10 and $100.");
            }

            if (bet === 0) {
                return;
            }
        }
        money.subMoney(bet);
        updateDisplay();
    
    // ask the user to pick "heads" or "tails"
    do {
        let ans = prompt("Select 'heads' or tails'");
    } 
        while(ans != "heads" && ans != "tails");
    // ans will now contain "heads" or "tails"
    // Perform the coin toss
    //let result = Math.random() < 0.5 ? "Heads" : "Tails";
    let result = Math.random() < 0.5 ? 1 : 2;
    if(result == 1 && ans == "heads") 
    {
            money.addMoney(bet * 4);
        alert("The result is " +result + "!");
        // show the random value and update the money
    } 
    else if (result == 2 && ans == "tails")
    {
            money.addMoney(bet * 4);
        alert("The result is " + result + "!");
        // show the random value and update the money
    }
    // Prompt the user with the result and ask if they want to play again or switch games
    let playAgain = confirm("The result is: " + result + "\nDo you want to play again?");
    if (playAgain) {
        playCoinToss();
    } else {
        let switchGame = confirm("Do you want to switch to another game?");
        if (switchGame) {
            alert("Redirecting to another game...");
        } else {
            alert("Thank you for playing! Enjoy your day!");
        }
    }
}
}

// Add event listener to the coin option container
document.getElementById("coin").addEventListener("click", playCoinToss);
