function slotMachines() {
    let m = document.getElementById("money");
    let money = parseInt(m.innerText.replace(/[\$,]/g, ""), 10); // Used to convert money to an int for calculations

    const min = 10;

    if (money < min) {
        alert("Sorry! You do not have enough money!");
        return;
    }

    while (bet < 10 || bet > 1000 || isNaN(bet)) {
        bet = parseInt(prompt("Enter your bet amount ($10 to $1000):"), 10);

        if (isNaN(bet) || bet < 10 || bet > 1000) {
            alert("Invalid bet amount. Please enter a value between $10 and $1000.");
        }
    }

    money -= bet;
    let slot1 = Math.floor(Math.random() * 3) + 1; // Random number beyween 1 and 3
    let slot2 = Math.floor(Math.random() * 3) + 1; 
    let slot3 = Math.floor(Math.random() * 3) + 1; 

    if (slot1 === slot2 && slot2 === slot3) {
        money += bet * 4;
        alert("Congratulations! You won");
    } else {
        alert("Sorry, you lost.");
    }

    money.innerText = "$" + currentMoney.toLocaleString();  // Update the displayed money (how to add comma?)

    let playAgain = confirm("Play again?");
    if (playAgain) {
        slotMachines();
    } else {
        return
    }
}

