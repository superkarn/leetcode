// https://leetcode.com/problems/contains-duplicate-ii/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`nums      :  ${nums}`);
    console.log(`k         :  ${k}`);

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
let bruteForce = (nums, k) => {
    let result = nums;

    return result;
};

let inputs = [
    { nums:[1,2,3,1], k:3, output:true },
    { nums:[1,0,1,1], k:1, output:true },
    { nums:[1,2,3,1,2,3], k:2, output:false },
];

// Comparing scalar output
console.log(inputs.map(x => containsNearbyDuplicate(x.nums, x.k) == x.output));
