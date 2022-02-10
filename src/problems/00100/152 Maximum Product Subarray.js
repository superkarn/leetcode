// https://leetcode.com/problems/maximum-product-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    //console.log(`nums      :  ${nums}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = kadane(nums);
    
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
        if (currentMax > result) {
            result = currentMax;
        }

        for (let j=i+1; j<nums.length; j++) {
            currentMax *= nums[j];
            if (currentMax > result) {
                result = currentMax;
            }
        }
    }

    return result;
};

// Kadane's algorithm
let kadane = (nums) => {

    if (nums.length == 0) {
        return 0;
    }

    let result = nums[0];
    let max = nums[0];
    let min = nums[0];
    
    //console.log(`  nums[0]: ${nums[0]} -> max: ${max}, min: ${min} -> result: ${result}`);
    for (let i=1; i<nums.length; i++) {
        // swap max/min
        if (nums[i] < 0) {
            let temp = max;
            max = min;
            min = temp;
        }

        max = Math.max(nums[i], nums[i]*max);
        min = Math.min(nums[i], nums[i]*min);

        result = Math.max(result, max);

        //console.log(`  nums[${i}]: ${nums[i]} -> max: ${max}, min: ${min} -> result: ${result}`);
    }

    return result;
};

let input = [2,3,-2,4]; //6
//let input = [];
//let input = [1];
//let input = [-2,0,-1]; //0
//let input = [2,0,1]; //2
//let input = [-2,3,-4]; // 24

let output = maxProduct(input);