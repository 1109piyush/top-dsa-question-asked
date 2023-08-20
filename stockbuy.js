// javascript program for the above approach
function maxProfit(prices , size) {

    // maxProfit adds up the difference between
    // adjacent elements if they are in increasing order
    var maxProfit = 0;

    // The loop starts from 1
    // as its comparing with the previous
    for (i = 1; i < size; i++)
        if (prices[i] > prices[i - 1])
            maxProfit += prices[i] - prices[i - 1];
    return maxProfit;
}

// Driver code

    // stock prices on consecutive days
    var price = [ 100, 180, 260, 310, 40, 535, 695 ];
    var n = price.length;

    // function call
    document.write(maxProfit(price, n));


    /*
const maxProfit = (prices) => {
let left = 0; // Buy
let right = 1; // sell
let max_profit = 0;
while (right < prices.length) {
if (prices[left] < prices[right]) {
  let profit = prices[right] - prices[left]; // our current profit

  max_profit = Math.max(max_profit, profit);
} else {
  left = right;
}
right++;
}
return max_profit;
};

    */


