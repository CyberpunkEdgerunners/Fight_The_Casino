function calcBet(type, bet, choice) {
    let amount = 0; // Holds total bet amount to be returned

    if (type === "o") {  // Outside Bets with low risk/low reward
        if (choice === "a" || choice === "b" || choice === "c") {  // a = Red/Black, b = Odd/Even, c = High/Low (1:1 payout)
            amount = bet * 2;

        } else if (choice === "d" || choice === "e") {  // d = Dozens, e = Columns (2:1 payout)
            amount = bet * 3;
        }

    } else if (type === "i") {  // Inside Bets with high risk/high reward
        switch (choice) {
            case "a":  // Straight (single number) (35:1 payout)
                amount = bet * 36;
                break;
            case "b":  // Split (two adjacent numbers) (17:1 payout)
                amount = bet * 18;
                break;
            case "c":  // Street (three numbers in a row) (11:1 payout)
                amount = bet * 12;
                break;
            case "d":  // Six Line (six numbers in two adjacent rows) (5:1 payout)
                amount = bet * 6;
                break;
        }
    }
    return amount;
}

function roulette() {
    let betType, betAmount, betChoice, win = false, valid = false, outcome, userGuess, color = "Black"; 
    let num1, num2, num3;
    const MIN = 5;

    betType = prompt("Choose a safer Outside Bet (o) or a risky Inside Bet (i)").toLowerCase();
    if (betType !== "o" && betType !== "i"){
        alert("Come back when you learn to read.");
        return;
    }

    do {
        betAmount = prompt("Place your bets! \n\nLeave blank -> Auto Bet $50 \n\nCurrent balance: $" + money.getBalance());
        if (betAmount === "") {           // Autobet is at $50 if user presses enter without typing a value
            betAmount = 50; 

        } else {
            betAmount = parseInt(betAmount, 10);
            
            if (betAmount === 0 || isNaN(betAmount)) {
                return;
            }

            if (isNaN(betAmount) || betAmount < MIN) {
                alert("Invalid bet amount. Please bet at least $" + MIN + ".");

            } else if (money.getBalance() < betAmount) {
                alert("Sorry, you are too broke! Place a bet between $" + MIN + " and $" + money.getBalance());
            }
        }
    } while ((betAmount < MIN || betAmount > money.getBalance())); // Ensures user enters correct bet amount

    do { // Asks user to chose a bet depending on if they chose to use outside bets or inside bets
        betChoice = prompt("Choose a bet type:\n" + (betType === "o" ? "a) Red/Black b) Odd/Even c) High/Low d) Dozens e) Columns" : "a) Straight b) Split c) Street d) Six Line")).toLowerCase();
    } while (betChoice !== "a" && betChoice !== "b" && betChoice !== "c" && betChoice !== "d" && betChoice !== "e" && (betType === "i" && betChoice === "e"));

    money.subMoney(betAmount);                          // Subtract bet amount from balance
    let pot = calcBet(betType, betAmount, betChoice);   // Calculates potential winnings
    updateDisplay();

    outcome = Math.floor(Math.random() * 37);           // Simulate outcome 

    if (outcome === 0) {
        color = "Green";
    }

    win = false;
    valid = false;
    switch (betType) {
        case "o":
            switch (betChoice) {

                case "a":
                    const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]; // Array to represent all red numbers
                    do {
                        userGuess = prompt("Choose Red (r) or Black (b):").toLowerCase();
                    } while (userGuess !== "r" && userGuess !== "b");

                    if ((userGuess === "r" && redNumbers.includes(outcome)) || userGuess === "b" && !(redNumbers.includes(outcome))) {
                        if (outcome !== 0) {
                            win = true;
                        }
                    }
                    if (redNumbers.includes(outcome)) {
                        color = "Red";
                    }
                    break;

                case "b":   // Even/Odd
                    do {
                        userGuess = prompt("Choose Even (e) or Odd (o):").toLowerCase();
                    } while (userGuess !== "e" && userGuess !== "o");
                    if (((outcome % 2 === 0 && userGuess === "e") || outcome % 2 !== 0 && userGuess === "o") && outcome !== 0) {
                        win = true;
                    }
                    break;

                case "c":   // High/Low
                    do{
                        userGuess = prompt("Choose High(h) or Low (l)\nLow is numbers 1 - 18, High is 19 - 36").toLowerCase();
                    } while (userGuess !== "h" && userGuess !== "l");

                    if ((outcome <= 18 && userGuess === "l" || outcome > 18 && userGuess === "h") && outcome !== 0) {
                        win = true;
                    }
                    break;

                case "d":   // Dozens
                    do {
                        userGuess = prompt("Choose a set of the three dozens.\n(a) 1 - 12 \n(b) 13 - 24 \n (c) 25 - 36").toLowerCase();
                    } while (userGuess !== "a" && userGuess !== "b" && userGuess !== "c");

                    if (outcome === 0) {
                        break;
                    }
                    if ((userGuess === "a" && outcome < 13) || (userGuess === "b" && outcome >= 13 && outcome < 25) || (userGuess === "c" && outcome >= 25)) {
                        win = true;
                    }
                    break;
                    
                    case "e":       // Columns
                    do {
                        userGuess = prompt("Choose a column\n (a) 1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34 \n(b) 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35 \n(c) 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36").toLowerCase();
                    } while (userGuess !== "a" && userGuess !== "b" && userGuess !== "c");

                    if (outcome === 0) {
                        break;
                    }
                    switch (userGuess) { //Checks if outcome is within the column the user guessed
                        case "a":
                            for (let i = 1; i <= 34; i += 3) {
                                if (outcome === i) {
                                    win = true;
                                }
                            }
                            break;

                        case "b":
                            for (let i = 2; i <= 35; i += 3) {
                                if (outcome === i) {
                                    win = true;

                                }
                            }
                            break;

                        case "c":
                            for (let i = 4; i <= 36; i += 3) {
                                if (outcome === i) {
                                    win = true;

                                }
                            }
                            break;
                    }
                    break;
           
            }
            break;
        case "i":
            switch(betChoice) {
                case "a": // Straight bets, user chooses a number
                    do {
                        userGuess = parseFloat(prompt("Enter a number between 0 and 36"));
                    } while (isNaN(userGuess) || userGuess < 0 || userGuess > 36);
                    
                    if (userGuess === outcome){
                        win = true;
                    }
                    break;


                    case "b": // Split bets, user can enter two numbers that are touching on the board
                    let num1, num2;

                    do { // First checks if numbers entered are valid
                        do{
                            do {
                            num1 = parseInt(prompt("Enter the first number: "));
                            } while(isNaN(num1) || num1 < 0 || num1 > 36);

                            num2 = parseInt(prompt(`
      -----------------------------------------------------------
      | 0  |  3 |  6 |  9 | 12 | 15 | 18 | 21 | 24 | 27 | 30 | 33 | 36 |
      -----------------------------------------------------------
      | 0  |  2 |  5 |  8 | 11 | 14 | 17 | 20 | 23 | 26 | 29 | 32 | 35 |
      -----------------------------------------------------------
      | 0  |  1 |  4 |  7 | 10 | 13 | 16 | 19 | 22 | 25 | 28 | 31 | 34 |
      -----------------------------------------------------------
      Enter second number (must be touching ${num1} on the board):

                            `));
                        } while(isNaN(num2) || (num2 < 0 || num2 > 36) || num1 === num2); // Checks if input is either not a number or is out of range of valid roulette numbers

                        let max = Math.max(num1, num2);
                        let min = Math.min(num1, num2);

                        if(max - min === 3){ // If the two numbers are on the same column (like 5 and 8)
                            valid = true;

                        } else if(Math.ceil(num1 / 3) === Math.ceil(num2 / 3)) { // Checks to see if the numbers are in the same row (9 and 10 would fail for example)
                            valid = true;

                        } else if((min === 0 && max === 1) || (min === 0 && max === 2)) { // Special case where split bet involves 0
                            valid = true;
                        }

                        if (!valid) {
                            alert("Invalid choices. Numbers must be touching eachother on the board.");
                        }

                    } while(!valid);

                    if (num1 === outcome || num2 === outcome) {
                        win = true;
                    }
                    break;

                case "c": // Street, 3 numbers in a row (1, 2, 3 for ex)
                    let x,y,z; // stores user guesses
                    do {
                        valid = false;
                        x = parseInt(prompt(`
      -----------------------------------------------------------
      | 0  |  3 |  6 |  9 | 12 | 15 | 18 | 21 | 24 | 27 | 30 | 33 | 36 |
      -----------------------------------------------------------
      |    |  2 |  5 |  8 | 11 | 14 | 17 | 20 | 23 | 26 | 29 | 32 | 35 |
      -----------------------------------------------------------
      |    |  1 |  4 |  7 | 10 | 13 | 16 | 19 | 22 | 25 | 28 | 31 | 34 |
      -----------------------------------------------------------
      Enter the first number at the top of the row (vertical)

                            `));
                        if (!isNaN(x)) {

                            y = x - 1; // if user chose 6 for x then y = 5, z = 4
                            z = x - 2;
                        }


                        for (let i = 3; i <= 36; i += 3) { // Ensures user chose a number from the top
                            if (x === i) {
                                valid = true;
                            }
                        }
                        if (!valid) {
                            alert("Invalid. The numbers must be in the same row (1, 2, 3 for example)");
                        }
                    
                    } while(!valid);
                    if (x === outcome || y === outcome || z === outcome) {
                        win = true;
                    }
                    break;
                
                case "d": // Six line, six consecutive numbers (1 - 6 for ex)
                    let ans;
                    do {
                        valid = false;
                        ans = parseInt(prompt("Enter the first number of the six line (If you chose 1 to 6, you would enter 1)\n\n 7 through 12\n 13 through 18\n 19 through 24\n 25 through 30\n 31 through 36"));

                        for (let i = 1; i <= 31; i += 6) { // Checks to see if number is at the beginning of six line
                            if (ans === i) {
                                valid = true;
                            }
                        }
                    } while(!valid);

                    for (let j = 0; j < 5; j++) {
                        if (ans === outcome) {
                            win = true;
                        }
                        ans++;
                    }
                    break;
              }
              break;
    }
    if (win) {
        alert ("Congratulations! You won $" + pot + "! The winning number was " + outcome + " " + color);
        money.addMoney(pot);
    }

    else {
        alert("Too bad! You lost. The winning number was " + outcome + " " + color);
    }
    updateDisplay();
    check();
}
document.getElementById("russian").addEventListener("click", roulette);
