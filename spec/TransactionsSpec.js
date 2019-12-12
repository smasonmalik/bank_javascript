'use strict';
var Transaction = require('../src/transactions');
var transaction = new Transaction();

describe('Transactions', function() {
  it('keeps record of all transaction', function() {
    transaction.store(50, 20, 30);
    expect(transaction.history[0]['credit']).toEqual(50);
    expect(transaction.history[0]['debit']).toEqual(20);
    expect(transaction.history[0]['balance']).toEqual(30);
    expect(transaction.history[0]['date']).toEqual(new Date());
  });
});
