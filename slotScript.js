function slotMachines() {
    const min = 1;                   // $1 minimum bet
    let autoBet = false
    const slots = ['\uD83C\uDF51', '\uD83D\uDCB2', '\uD83C\uDF4B', '\uD83C\uDF52', '\uD83C\uDF49', '\u0037\uFE0F\u20E3']; // // orange, money, lemon, cherry, melon, 7's (zero-based index)
    let bet = -1;

    if (money.getBalance() < min) {  // Exits function if user is too broke
        alert("Sorry! You do not have enough money!");
        return;
    }

    while (bet < 1 || bet > 100) {  // Input verification, runs while bet is not between $1 and $100
        bet = prompt("Enter your bet amount ($1 to $100) \n\nLeave blank -> Auto Bet $50");
        if (bet === "") {           // Autobet is at $50 if user presses enter without typing a value
            bet = 50;
        }

        else {
            bet = parseInt(bet, 10)
            if ((isNaN(bet) || bet < 1 || bet > 100) && bet != 0) {
                alert("Invalid bet amount. Please enter a value between $1 and $100.");
            }

            if (bet === 0 || isNaN(bet)) {
                return;
            }
        }
    }

    money.subMoney(bet);
    updateDisplay();

    let slot1 = Math.floor(Math.random() * 6); // Random number between 0 and 5
    let slot2 = Math.floor(Math.random() * 6);
    let slot3 = Math.floor(Math.random() * 6);



    if (slot1 === slot2 && slot2 === slot3 && slot3 === 5) {
        money.addMoney(bet * 6);
        alert(`
+=========================+
|                 [ SUPER SLOTS ]                       |
|        +-------------------------+                |
|        |    +---+  +---+  +---+  |                  |
|              |${slots[slot1]}|     |${slots[slot2]}|     |${slots[slot3]}|                       |
|        |    +---+  +---+  +---+  |                  |
|        +-------------------------+                |
|                                                                  |
|                   +-------------+                        |
|                   |  LUCKY 7's!!  |                        |
|                   +-------------+                        |
|                                                                   |
+=========================+
`);

    } else if (slot1 === slot2 && slot2 === slot3) {
        money.addMoney(bet * 3);
        alert(`
+=========================+
|                 [ SUPER SLOTS ]                       |
|        +-------------------------+                |
|        |    +---+  +---+  +---+  |                  |
|              |${slots[slot1]}|     |${slots[slot2]}|     |${slots[slot3]}|                       |
|        |    +---+  +---+  +---+  |                  |
|        +-------------------------+                |
|                                                                  |
|                   +-------------+                        |
|                   |  TOUGH TRIO!!  |                  |
|                   +-------------+                        |
|                                                                   |
+=========================+
`);

    } else if ((slot1 === slot2) || (slot1 === slot3) || (slot2 === slot3)) {
        money.addMoney(bet * 2);
        alert(`
+=========================+
|                 [ SUPER SLOTS ]                       |
|        +-------------------------+                |
|        |    +---+  +---+  +---+  |                  |
|              |${slots[slot1]}|     |${slots[slot2]}|     |${slots[slot3]}|                       |
|        |    +---+  +---+  +---+  |                  |
|        +-------------------------+                |
|                                                                  |
|                   +-------------+                        |
|                   |  DOUBLES!!  |                        |
|                   +-------------+                        |
|                                                                   |
+=========================+
`);

    } else {
        alert(`
+=========================+
|                 [ SUPER SLOTS ]                       |
|        +-------------------------+                |
|        |    +---+  +---+  +---+  |                  |
|              |${slots[slot1]}|     |${slots[slot2]}|     |${slots[slot3]}|                       |
|        |    +---+  +---+  +---+  |                  |
|        +-------------------------+                |
|                                                                  |
|                   +-------------+                        |
|                   |  FAILURE!!  |                          |
|                   +-------------+                        |
|                                                                   |
+=========================+
`);
    }

    updateDisplay();
    check();

}
document.getElementById("slot").addEventListener("click", slotMachines);
