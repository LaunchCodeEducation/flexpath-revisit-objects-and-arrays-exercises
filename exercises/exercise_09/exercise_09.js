// Exercise 9: Advanced Use of Array.reduce
// One reduce pass: final balance + transactions split by type.

const transactions = [
  { type: "deposit", amount: 100 },
  { type: "withdrawal", amount: 50 },
  { type: "deposit", amount: 200 },
  { type: "withdrawal", amount: 80 },
];

const startingBalance = 0;

const result = transactions.reduce(
  (acc, transaction) => {
    if (transaction.type === "deposit") {
      acc.balance += transaction.amount;
      acc.deposits.push(transaction);
    } else if (transaction.type === "withdrawal") {
      acc.balance -= transaction.amount;
      acc.withdrawals.push(transaction);
    }
    return acc;
  },
  { balance: startingBalance, deposits: [], withdrawals: [] }
);

console.log("Final Balance:", result.balance); // 170
console.log("Deposits:", result.deposits);
// [{ type: 'deposit', amount: 100 }, { type: 'deposit', amount: 200 }]
console.log("Withdrawals:", result.withdrawals);
// [{ type: 'withdrawal', amount: 50 }, { type: 'withdrawal', amount: 80 }]
