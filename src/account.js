'use strict';

class Account {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}
module.exports = Account;
