function bankAccount() {
  let balance = 1000; // Private variable

  return {
    deposit: function (amount) {
      balance += amount;
      console.log(`Deposited: ${amount}, New Balance: ${balance}`);
    },
    withdraw: function (amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
      } else {
        balance -= amount;
        console.log(`Withdrew: ${amount}, Remaining Balance: ${balance}`);
      }
    },
    getBalance: function () {
      return balance;
    },
  };
}

const account = bankAccount();
account.deposit(500); // "Deposited: 500, New Balance: 1500"
account.withdraw(300); // "Withdrew: 300, Remaining Balance: 1200"
console.log(account.getBalance()); // 1200
