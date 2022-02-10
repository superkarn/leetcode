// https://leetcode.com/problems/coin-change/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`coins     :  ${coins}`);
    console.log(`amount    :  ${amount}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = dp(coins, amount);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result);
    console.log('--------------------------');

    return result;
};

// attempt1: description on the algorithm
let dp = (coins, amount) => {
    // special cases
    if (amount == 0) return 0;

    let cache = Array(amount+1).fill(Number.MAX_SAFE_INTEGER);
    // 0th is a base case
    cache[0] = 0;

    // Calculate the results for all the values up to amount
    for (let i=1; i<amount+1; i++) {
        // Check each coin
        for (let c=0; c<coins.length; c++) {
            // If the current coin can be added without going over
            if (i-coins[c] >= 0) {
                // Then set the result for the current ith amount to the minimum between
                // itself or the result of the i-currentCoin +1
                cache[i] = Math.min(cache[i], cache[i-coins[c]] +1);
                //console.log(`  ${i}: ${cache[i]}`);
            }
        }
    }

    return cache[amount] == Number.MAX_SAFE_INTEGER ? -1 : cache[amount];
};

//let coins = [1,2,5], amount = 11; // 3
//let coins = [2], amount = 3; // -1
let coins = [1], amount = 0; // 0

let output = coinChange(coins, amount);