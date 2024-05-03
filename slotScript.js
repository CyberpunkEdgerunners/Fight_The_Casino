function slotMachines() {
    const min = 10;
    let playAgain = true;

    

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

        let slot1 = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
        let slot2 = Math.floor(Math.random() * 5) + 1; 
        let slot3 = Math.floor(Math.random() * 5) + 1; 

        if (slot1 === slot2 && slot2 === slot3) {
            money.addMoney(bet * 4);
            alert("Congratulations! You won the Jackpot!");

        } else if ((slot1 === slot2) || (slot1 === slot3) || (slot2 === slot3)) {
            money.addMoney(bet * 2);
            alert("Congratulations! You got a matching pair!");
            
        } else {
            alert("Sorry, you lost.");
        }

        updateDisplay();
        check();      
}
document.getElementById("slot").addEventListener("click", slotMachines);
