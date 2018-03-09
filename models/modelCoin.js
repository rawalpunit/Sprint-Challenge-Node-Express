const fetch = require('node-fetch');
const config = require('../config');

function getCurrentPrice() {
  return new Promise((resolve, reject) => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(res => res.json())
      .then(res => {
        resolve(Number(res.bpi.USD.rate_float));
      })
      .catch(res => {
        reject("shit..there's an errpr", res);
      });
  });
}

function getPreviousPrice() {
  let ydayDate = "2018-03-08";
  return new Promise((resolve, reject) => {
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday')
    .then(res => res.json())
      .then(res => {
        resolve(res.bpi[ydayDate]);
      })
      .catch(res => {
        reject("shit..there's an errpr", res);
      });
  });
}

module.exports = { getCurrentPrice, getPreviousPrice };
