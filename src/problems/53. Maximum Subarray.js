// https://leetcode.com/problems/maximum-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    //console.log(`nums      :  ${nums}`);

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

// bruteForce: loop through all the combinations
let bruteForce = (nums) => {
    let result = nums.length > 0 ? nums[0] : 0;

    for (let i=0; i<nums.length; i++) {
        let currentMax = nums[i];
        for (let j=i+1; j<nums.length; j++) {
            currentMax += nums[j];
            if (currentMax > result) {
                result = currentMax;
            }
        }
    }

    return result;
};


let input = [-2,1,-3,4,-1,2,1,-5,4];
//let input = [];
//let input = [1];
//let input = [5,4,-1,7,8];

let output = maxSubArray(input);