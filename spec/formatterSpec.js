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
    it('returns amount to 2 decimal places', function() {
      expect(formatter.formatAmount(50.50)).toEqual('50.50');
    });
  });

});
