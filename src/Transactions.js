'use strict';

class Transactions {
  constructor() {
    this.history = [];
  }

  store(credit = 0, debit = 0, balance) {
    this.history.push({date: new Date(), credit: credit,
      debit: debit, balance: balance});
  }
}
module.exports = Transactions;
