'use strict';
var Transactions = require('../src/transactions');
var transactions = new Transactions();

describe('Transactions', function() {
  it('keeps record of all transaction', function() {
    transactions.store(50, 20, 30);
    expect(transactions.history[0]['credit']).toEqual(50);
    expect(transactions.history[0]['debit']).toEqual(20);
    expect(transactions.history[0]['balance']).toEqual(30);
    expect(transactions.history[0]['date']).toEqual(new Date());
  });
});
