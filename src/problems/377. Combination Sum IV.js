// https://leetcode.com/problems/combination-sum-iv/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`nums      :  ${nums}`);
    console.log(`target    :  ${target}`);

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
    let result = target;

    return result;
};

let inputs = [
    { nums:[1,2,3], target:4, output:7 },
    { nums:[9], target:3, output:0 },
];

// Comparing scalar output
console.log(inputs.map(x => combinationSum4(x.nums, x.target) == x.output));