// Exercise 17: Private State with Closures - BankAccount
// `balance` exists only inside the constructor; the methods
// close over it, so nothing outside can reach it directly.

function BankAccount(initialBalance) {
  let balance = initialBalance;

  this.deposit = function (amount) {
    if (amount > 0) {
      balance += amount;
    } else {
      throw new Error("Invalid deposit amount");
    }
  };

  this.withdraw = function (amount) {
    if (amount > 0 && amount <= balance) {
      balance -= amount;
    } else {
      throw new Error("Invalid withdrawal amount");
    }
  };

  this.getBalance = function () {
    return balance;
  };
}

// Testing
const account = new BankAccount(1000);

account.deposit(500);
console.log(account.getBalance()); // 1500

account.withdraw(200);
console.log(account.getBalance()); // 1300

console.log(account.balance); // undefined - balance is private

account.balance = 1000000; // only adds an unrelated property
console.log(account.getBalance()); // Still 1300
