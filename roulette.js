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
    let betType, betAmount, betChoice, win = false, valid = false, outcome, userGuess, color = "black"; // color
    let num1, num2, num3;

    do {
        betType = prompt("Place your bets! Choose (o) Outside Bet or (i) Inside Bet").toLowerCase();
    } while(betType !== "o" && betType !== "i") 

    do { // Asks user to chose a bet depending on if they chose to use outside bets or inside bets
        betChoice = prompt("Choose a bet type:\n" + (betType === "o" ? "a) Red/Black b) Odd/Even c) High/Low d) Dozens e) Columns" : "a) Straight b) Split c) Street d) Six Line")).toLowerCase();
    } while (betChoice !== "a" && betChoice !== "b" && betChoice !== "c" && betChoice !== "d" && betChoice !== "e" && (betType === "i" && betChoice === "e"));
        do {
            betAmount = parseFloat(prompt("Enter your bet amount. Current balance: $" + money.getBalance()));

            if (isNaN(betAmount) || betAmount < 10) {
                alert("Invalid bet amount. Please bet at least $10.");

            } else if (money.getBalance() < betAmount) {
                alert("Sorry, you are too broke! Place a bet between $10 and $" + money.getBalance());
            }

        } while ((isNaN(betAmount) || betAmount < 10 || betAmount > money.getBalance())); // Ensures user enters correct bet amount

    money.subMoney(betAmount);  // Subtract bet amount from balance
    let pot = calcBet(betType, betAmount, betChoice);
    updateDisplay();

    // Simulate outcome 
    outcome = Math.floor(Math.random() * 37); 
    win = false;
    valid = false;
    switch (betType) {
        case "o":
            switch (betChoice) {
                case "a": 
                    const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
                    do {
                        userGuess = prompt("Choose Red (r) or Black (b):").toLowerCase();
                    } while (userGuess !== "r" && userGuess !== "b");

                    if ((userGuess === "r" && redNumbers.includes(outcome)) || userGuess === "b" && !(redNumbers.includes(outcome))) {  
                        if (outcome !== 0) {
                            win = true;
                        } 
                    }
                    if (redNumbers.includes(outcome)) {
                        color = "red";
                    }
                    break;

                case "b": 
                    do {
                        userGuess = prompt("Choose Even (e) or Odd (o):").toLowerCase();
                    } while (userGuess !== "e" && userGuess !== "o");
                    if (((outcome % 2 === 0 && userGuess === "e") || outcome % 2 !== 0 && userGuess === "o") && outcome !== 0) {
                        win = true;
                    }
                    break;

                case "c":
                    do{
                        userGuess = prompt("Choose High(h) or Low (l)\nLow is numbers 1 - 18, High is 19 - 36").toLowerCase();
                    } while (userGuess !== "h" && userGuess !== "l");

                    if ((outcome <= 18 && userGuess === "l" || outcome > 18 && userGuess === "h") && outcome !== 0) {
                        win = true;
                    }
                    break;
                
                case "d":
                    do {
                        userGuess = prompt("Choose a set of the three dozens.\n(a) 1 - 12 \n(b) 13 - 24 \n (c) 25 - 36").toLowerCase()
                    } while (userGuess !== "a" && userGuess !== "b" && userGuess !== "c");

                    if (outcome === 0) {
                        break;
                    }
                    if ((userGuess === "a" && outcome < 13) || (userGuess === "b" && outcome > 13 && outcome < 25) || (userGuess === "c" && outcome > 24)) {
                        win = true;
                    }
                    break;

                case "e":
                    do {
                        userGuess = prompt("Choose a column\n (a) 1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34 \n(b) 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35 \n(c) 3, 6, 9, 12, 15, 18, 31, 24, 27, 30, 33, 36").toLowerCase();
                    } while (userGuess !== "a" && userGuess !== "b" && userGuess !== "c");

                    if (outcome === 0) {
                        break;
                    }
                    switch (userGuess) { //Checks if outcome is within the column the user guessed
                        case "a":
                            for (let i = 1; i <= 34; i += 3) {
                                if (outcome === i) {
                                    win = true;
                                    break;
                                }
                            }
                        
                        case "b":
                            for (let i = 2; i <= 35; i + 3) {
                                if (outcome === i) {
                                    win = true;
                                    break;
                                }
                            }

                        case "c":
                            for (let i = 3; i <= 36; i + 3) {
                                if (outcome === i) {
                                    win = true;
                                    break;
                                }
                            }
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
                            num1 = parsInt(prompt("Enter the first number: "));
                            num2 = parseInt(prompt("Enter second number (must be touching the first number on the board): "));
                        } while(isNaN(num1) || isNaN(num2) || (num1 < 0 || num1 > 36) || (num2 < 0 || num2 > 36)); // Checks if input is either not a number or is out of range of valid roulette numbers

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
                    do {
                        num1 = parseInt(prompt("Enter the first number in a row"));
                        num2 = parseInt(prompt("Enter the second number in a row"));
                        num3 = parseInt(prompt("Enter the third number in the row"));
                        if (isNaN(num1) || isNaN(num2)|| isNaN(num3)) {
                            alert("Invalid")
                            valid = false;

                        } else if (Math.ceil(num1 / 3) !== Math.ceil(num2 / 3) && Math.ceil(num2 / 3) !== Math.ceil(num3 / 3)) {
                            alert("Invalid. The numbers must be in the same row (1, 2, 3 for example")
                            valid = false;

                        } else {
                            valid = true;
                        }
                    
                    } while(!valid);
                    if (num1 === outcome || num2 === outcome || num3 === outcome) {
                        win = true;
                    }
                    break;

                case "d": // Six line, six consecutive numbers (1 - 6 for ex)
                do {
                    num1 = parseInt(prompt("Enter the first number of the six line (If you chose 1 to 6, you would enter 1)"));
                    num2 = parseInt(prompt("Enter last number of the six line"));
                    let maxx = Math.max(num1, num2);
                    let minn = Math.min(num1, num2);


                    if (Math.ceil(num1 / 6) === Math.ceil(num2 / 6)) {
                        if (maxx - minn === 5) { 
                            valid = true;
                        }
                    }
                } while(!valid || isNaN(num1) || isNaN(num2));


                for (let j = minn; j <= maxx; j++) {
                    if (j === outcome) {
                        win = true;
                    }
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
        alert("Sorry! You lost. The winning number was " + outcome);
    }
    updateDisplay();
}
document.getElementById("russian").addEventListener("click", roulette);