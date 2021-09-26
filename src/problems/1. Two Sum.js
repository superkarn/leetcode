// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let startTime = Date.now();
    console.log('  heapUsed 1: ', process.memoryUsage().heapUsed);

    for (var ii=0; ii < nums.length; ii++) {
        for (var jj=ii+1; jj < nums.length; jj++) {        
            if (nums[ii] + nums[jj] == target) {
                
                let endTime = Date.now();
                console.log('  heapUsed 2: ', process.memoryUsage().heapUsed);
                console.log('  Total time: ', endTime - startTime);
                return [ii, jj];
            }
        }
    }
    
    let endTime = Date.now();
    console.log('  heapUsed 2: ', process.memoryUsage().heapUsed);
    console.log('  Total time: ', endTime - startTime);
    return [];
};

let input = [2,7,11,15];
let target = 9;
let output = twoSum(input, target);
console.log(output);