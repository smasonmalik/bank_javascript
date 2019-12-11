'use strict';
var Transaction = require('../src/Transactions');
var transaction;
let today = new Date().toLocaleDateString();

describe('Transactions', function() {
  it('keeps record of all transaction', function() {
    transaction = new Transaction(50, 20, 30);
    transaction.store();
    expect(transaction.history[0]['credit']).toEqual(50);
    expect(transaction.history[0]['debit']).toEqual(20);
    expect(transaction.history[0]['balance']).toEqual(30);
    expect(transaction.history[0]['date']).toEqual(today);
  });
});
