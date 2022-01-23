// https://leetcode.com/problems/jump-game/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
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
    { nums:[2,3,1,1,4], output:true },
    { nums:[3,2,1,0,4], output:false },
];

// Comparing scalar output
console.log(inputs.map(x => canJump(x.nums) == x.output));