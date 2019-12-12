'use strict';

var Account = require('../src/account');


var account = new Account();
account.deposit(50);
account.deposit(50);
account.withdraw(10);
console.log(account.statement());
