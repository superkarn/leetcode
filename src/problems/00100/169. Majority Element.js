// https://leetcode.com/problems/majority-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
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
    const TARGET = Math.floor(nums.length/2) +1;
    let frequencies = {};

    for (let i=0; i<nums.length; i++) {
        frequencies[nums[i]] = 1 + (frequencies[nums[i]] ? frequencies[nums[i]] : 0);

        if (frequencies[nums[i]] >= TARGET) {
            return nums[i];
        }
    }

    return 0;
};

let inputs = [
    { nums:[3,2,3], output:3 },
    { nums:[2,2,1,1,1,2,2], output:2 },
];

// Comparing scalar output
console.log(inputs.map(x => majorityElement(x.nums) == x.output));