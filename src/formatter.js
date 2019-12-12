'use strict';

const headers = 'date || credit || debit || balance';

function formatDate(date) {
  return date.toLocaleDateString('en-GB');
}

function formatAmount(amount) {
  return ((amount === 0) ? ' ' : ` ${amount.toFixed(2)} `);
}

function formatBalance(amount) {
  return ` ${amount.toFixed(2)} `;
}

function formatOutput(transactionHistory) {
  var output = headers;
  transactionHistory.reverse().forEach(function(transaction) {
    var singleTransaction = `${formatDate(transaction['date'])} ||` +
                            `${formatAmount(transaction['credit'])}||` +
                            `${formatAmount(transaction['debit'])}||` +
                            `${formatBalance(transaction['balance'])}`;
    output += `\n${singleTransaction}`;
  });
  return output;
}

module.exports.formatDate = formatDate;
module.exports.formatAmount = formatAmount;
module.exports.formatOutput = formatOutput;
