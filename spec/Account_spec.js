'use strict';

var Account = require('../src/Account');

describe('Account', function() {
  var account;

  it('deposits money in the account', function() {
    account = new Account();
    account.deposit(50);
    expect(account.balance).toBe(50);
  });

  it('deposits money in the account', function() {
    account = new Account();
    account.deposit(50);
    account.withdraw(50);
    expect(account.balance).toBe(0);
  });
});
