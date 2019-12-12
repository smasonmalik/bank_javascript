'use strict';

var formatter = require('../src/formatter');


describe('Formatter', function() {
  describe('formatDate', function() {
    it('formats the date', function() {
      let date = new Date();
      expect(formatter.formatDate(date)).toEqual(
        date.toLocaleDateString('en-GB')
      );
    });
  });

  describe('formatAmount', function() {
    it('returns empty string if amount is 0', function() {
      expect(formatter.formatAmount(0)).toEqual(' ');
    });
    it('returns string of amount to 2 decimal places', function() {
      expect(formatter.formatAmount(50.50)).toEqual(' 50.50 ');
    });
  });

  describe('formatOutput', function() {
    it('formats transaction history to display output', function() {
      let history = [{date: new Date(), credit: 50, debit: 0, balance: 50}];
      let date = new Date().toLocaleDateString('en-GB');
      expect(formatter.formatOutput(history)).toEqual(
        `date || credit || debit || balance\n${date} || 50.00 || || 50.00 `);
    });
  });

});
