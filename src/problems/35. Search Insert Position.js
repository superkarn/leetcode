// https://leetcode.com/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`param1    :  ${param1}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(nums, target);
    
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
let bruteForce = (nums, target) => {
};

let nums = [1,3,5,6], target = 5; // 2
//let nums = [1,3,5,6], target = 2; // 1
//let nums = [1,3,5,6], target = 7; // 4

let output = searchInsert(nums, target);