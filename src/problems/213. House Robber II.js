// https://leetcode.com/problems/house-robber-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
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
    { nums:[2,3,2], output:3 },
    { nums:[1,2,3,1], output:4 },
    { nums:[1,2,3], output:3 },
];

// Comparing scalar output
console.log(inputs.map(x => rob(x.nums) == x.output));