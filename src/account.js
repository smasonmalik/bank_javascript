'use strict';
var Transactions = require('./transactions');
var formatter = require('../src/formatter');


class Account {
  constructor() {
    this.balance = 0;
    this.transactions = new Transactions();
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.store(amount, undefined, this.balance);
    return this.balance;
  }

  withdraw(amount) {
    this.balance -= amount;
    this.transactions.store(undefined, amount, this.balance);
  }
  statement() {
    return formatter.formatOutput(this.transactions.history);
  }
}
module.exports = Account;
