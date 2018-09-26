// Return change with coins from 25 to 1 cent with the less amount of coins possibly.

// Assuming change in cents. The parameter change is an integer
const getCoinAmount = function(change) {
  let totalCoins = 0;
  while(change > 0) {
    if(change >= 25) {
      totalCoins += Math.floor(change / 25);
      change = change % 25;
    } else if(change >= 10) {
      totalCoins += Math.floor(change / 10);
      change = change % 10;
    } else if(change >= 5) {
      totalCoins += Math.floor(change / 5);
      change = change % 5;
    } else {
      totalCoins += change;
      change = 0;
    }
  }

  return totalCoins;
}

console.log(Math.floor(getCoinAmount(41)));