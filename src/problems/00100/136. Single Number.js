// https://leetcode.com/problems/single-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`nums      :  ${nums}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(nums);
    
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
let bruteForce = (nums) => {
    let result = nums;

    return result;
};

let inputs = [
    { nums:[2,2,1], output:1 },
    { nums:[4,1,2,1,2], output:4 },
    { nums:[1], output:1 },
];

// Comparing scalar output
console.log(inputs.map(x => singleNumber(x.nums) == x.output));
