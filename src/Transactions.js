'use strict';

class Transaction {
  constructor(deposit = 0, withdrawl = 0, newBalance) {
    this.credit = deposit;
    this.debit = withdrawl;
    this.balance = newBalance;
    this.date = new Date().toLocaleDateString();
    this.history = [];
  }
  store() {
    this.history.push({date: this.date,
      credit: this.credit,
      debit: this.debit,
      balance: this.balance,
    });
  }
}
module.exports = Transaction;
