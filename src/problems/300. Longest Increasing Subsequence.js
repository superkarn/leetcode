// https://leetcode.com/problems/longest-increasing-subsequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`nums    :  ${nums}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = dp(nums);
    
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
let dp = (nums) => {
    let result = nums;

    return result;
};

let input = [10,9,2,5,3,7,101,18]; // 4
//let input = [0,1,0,3,2,3]; // 4
//let input = [7,7,7,7,7,7,7]; // 1

let output = lengthOfLIS(input);