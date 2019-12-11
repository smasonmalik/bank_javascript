'use strict';

var Account = require('../src/Account');

describe('Account', function() {
  var account;
  beforeEach(function() {
    account = new Account;
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
});
