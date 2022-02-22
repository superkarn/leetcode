// https://leetcode.com/problems/maximum-average-subarray-i/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`nums      :  ${nums}`);
    console.log(`k         :  ${k}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = slidingWindow(nums, k);
    
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
let slidingWindow = (nums, k) => {
    let l = 0;
    let r = l+k;
    let sum = nums.slice(l,r).reduce((prev, curr) => prev+curr, 0);
    let maxSum = sum;
    //console.log(`  [${l}:${r}] -> [${nums.slice(l,r)}] -> sum:${sum} / maxSum:${maxSum}`);

    for (l=1; l<=nums.length-k; l++) {
        r = l+k;
        
        // Remove the previous item from sum
        sum -= nums[l-1];

        // Add the next item to sum
        sum += nums[r-1];

        maxSum = Math.max(maxSum, sum);
        //console.log(`  [${l}:${r}] -> [${nums.slice(l,r)}] -> sum:${sum} / maxSum:${maxSum}`);
    };

    return maxSum/k;
};

let inputs = [
    { nums:[1,12,-5,-6,50,3], k:4, output:12.75 },
    { nums:[5], k:1, output:5.0 },
    { nums:[-1], k:1, output:-1.0 },
];

// Comparing scalar output
console.log(inputs.map(x => findMaxAverage(x.nums, x.k) == x.output));
