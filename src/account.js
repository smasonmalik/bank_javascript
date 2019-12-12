'use strict';
var Transaction = require('./transactions');
var transaction = new Transaction();

class Account {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
    transaction.store(amount, undefined, this.balance);
    return this.balance;
  }

  withdraw(amount) {
    this.balance -= amount;
    transaction.store(undefined, amount, this.balance);
  }
}
module.exports = Account;
