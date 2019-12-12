'use strict';

class Transaction {
  constructor() {
    this.history = [];
  }

  store(credit = 0, debit = 0, balance) {
    this.history.push({date: new Date(), credit: credit,
      debit: debit, balance: balance});
  }
}
module.exports = Transaction;
