// https://leetcode.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`nums      :  ${nums}`);
    console.log(`val       :  ${val}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(nums, val);
    
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
let bruteForce = (nums, val) => {
    let result = param1;

    return result;
};

let nums = [3,2,2,3], val = 3; // 2
//let nums = [0,1,2,2,3,0,4,2], val = 2; // 5

let output = removeElement(nums, val);