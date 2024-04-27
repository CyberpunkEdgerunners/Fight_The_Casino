function slotMachines() {
    const min = 100;
    let playAgain = true;

    while (playAgain) {

        if (money.getBalance() < min) {
            alert("Sorry! You do not have enough money!");
            return;
        }

        let bet = 0;
        while (bet < 10 || bet > 100 || isNaN(bet)) {
            bet = parseInt(prompt("Enter your bet amount ($10 to $100):"), 10);

            if (isNaN(bet) || bet < 10 || bet > 100) {
                alert("Invalid bet amount. Please enter a value between $10 and $100.");
            }
        }

        money.subMoney(bet);
        updateDisplay();

        let slot1 = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
        let slot2 = Math.floor(Math.random() * 3) + 1; 
        let slot3 = Math.floor(Math.random() * 3) + 1; 

        if (slot1 === slot2 && slot2 === slot3) {
            money.addMoney(bet * 4);
            alert("Congratulations! You won");
        } else {
            alert("Sorry, you lost.");
        }

        updateDisplay();
        playAgain = confirm("Play again?");
    }
}
document.getElementById("slot").addEventListener("click", slotMachines);

