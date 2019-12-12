'use strict';

function formatDate(date) {
  return date.toLocaleDateString('en-GB');
}

function formatAmount(amount) {
  return ((amount === 0) ? ' ' : amount.toFixed(2).toString());
}
module.exports.formatDate = formatDate;
module.exports.formatAmount = formatAmount;
