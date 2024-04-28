class Money {
    constructor() {
        this.balance = 1000; // Constructor to set balance to $1000
    }

    addMoney(x) {   // Adds x to total balance
        if (x < 0) {
            console.error("Amount must be positive");
            return;
        }
        this.balance += x;
    }

    subMoney(x) {   // Subtracts x from total balance
        if (x < 0) {
            console.error("Amount must be positive");
            return;
        }

        if (this.balance < x) {
            console.error("You are too broke!");
            return;
        }

        this.balance -= x;
    }

    getBalance() { // Returns current balance
        return this.balance;
    }

    setBalance(x) { // Sets balance to x
        if (x < 0) {
            console.error("Amount must be positive");
            return
        }
        this.balance = x;
    }
}

function updateDisplay() {
    var balanceElement = document.getElementById("money");
    balanceElement.textContent = `$${money.getBalance().toLocaleString()}`;
}

const money = new Money(); // Global bank object to influence

// You can call functions to influence this money variable across all games, replacing value with an int
// money.addMoney(value)
// money.subMoney(value)
// money.get_balance()
// money.setBalance(value)
