// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`nums      :  ${nums}`);
    console.log(`k         :  ${k}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(nums, k);
    
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
let bruteForce = (nums, k) => {
    let result = nums;

    return result;
};

let inputs = [
    { nums:[90], k:1, output:0 },
    { nums:[9,4,1,7], k:2, output:2 },
];

// Comparing scalar output
console.log(inputs.map(x => minimumDifference(x.nums, x.k) == x.output));
