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
    let result = bruteForce(param1);
    
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
let bruteForce = (coins, amount) => {
    let result = param1;

    return result;
};

let coins = [1,2,3,4,5], amount = 11; // 3
//let coins = [2], amount = 3; // -1
//let coins = [1], amount = 0; // 0

let output = coinChange(coins, amount);