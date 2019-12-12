'use strict';

var Account = require('../src/account');

describe('Account', function() {
  var account;
  var date;
  beforeEach(function() {
    account = new Account;
    date = new Date().toLocaleDateString('en-GB');
  });

  it('deposits money in the account', function() {
    account.deposit(50);
    expect(account.balance).toBe(50);
  });

  it('deposits money in the account', function() {
    account.deposit(50);
    account.withdraw(50);
    expect(account.balance).toBe(0);
  });

  it('logs formatted transaction history to console', function() {
    account.deposit(50);
    account.deposit(100);
    account.withdraw(10);
    expect(account.statement()).toEqual(
      'date || credit || debit || balance' +
      `\n${date} || || 10.00 || 140.00 ` +
      `\n${date} || 100.00 || || 150.00 ` +
      `\n${date} || 50.00 || || 50.00 `);
  });
});
