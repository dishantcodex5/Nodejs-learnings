// currency_converter.js
const https = require('https');
const readline = require('readline');

const API_KEY = '7f85757f07ffc948d5cc4f75'; // Get from https://www.exchangerate-api.com/
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function convertCurrency(amount, rate) {
  return (amount * rate).toFixed(2);
}

function startConversion() {
  https.get(BASE_URL, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      const parsedData = JSON.parse(data);
      const rates = parsedData.conversion_rates;

      rl.question('Enter the amount in USD: ', (amount) => {
        const numericAmount = parseFloat(amount);

        rl.question('Enter the target currency (e.g., INR, EUR, NPR): ', (currency) => {
          const rate = rates[currency.toUpperCase()];

          if (rate && !isNaN(numericAmount)) {
            console.log(`${amount} USD is approximately ${convertCurrency(numericAmount, rate)} ${currency.toUpperCase()}`);
          } else {
            console.log('Invalid input - check amount or currency code');
          }
          rl.close();
        });
      });
    });

    response.on('error', (error) => {
      console.log('Error fetching rates:', error.message);
      rl.close();
    });
  });
}

console.log('=== Real-time Currency Converter ===');
console.log('(Converts from USD to other currencies)\n');
startConversion();