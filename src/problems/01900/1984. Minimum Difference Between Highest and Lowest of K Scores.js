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

// 1. Sort the list
// 2. Use sliding window of size k
// 3. Check the first and last numbers of each window
// 4. Find the smallest difference
let slidingWindow = (nums, k) => {
    // Result is the smallest difference
    let result = Number.MAX_SAFE_INTEGER;

    // 1. Sort the list
    let sorted = nums.sort((a,b) => a-b);
    //console.log(`sorted: ${sorted}`);

    // 2. Use sliding window of size k
    for (let i=0; i<=nums.length-k; i++) {
        // 3. Check the first and last numbers of each window
        let diff = nums[i+k-1] - nums[i];
        
        // 4. Find the smallest difference
        result = Math.min(result, diff);

        //console.log(`  [${i},${i+k-1}] -> ${nums[i]},${nums[i+k-1]} -> ${diff} -> ${result}`);
    }
    
    return result;
};

let inputs = [
    { nums:[90], k:1, output:0 },
    { nums:[9,4,1,7], k:2, output:2 },
];

// Comparing scalar output
console.log(inputs.map(x => minimumDifference(x.nums, x.k) == x.output));
