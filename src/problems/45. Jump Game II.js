// https://leetcode.com/problems/jump-game-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`nums      :  ${nums}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = dp(nums);
    
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
let dp = (nums) => {
    // Special cases
    if (!nums) return 0;
    if (nums.length == 0) return 0;

    // Cache contains the number of steps to get to the last item
    let cache = [];

    // Last item is 0
    cache[nums.length-1] = 0;
    //console.log(`  cache[${nums.length-1}]=${cache[nums.length-1]}`);

    // Loop backward from 2nd-to-last item
    for (let i=nums.length-2; i>=0; i--) {
        //console.log(`  i=${i}`);
        let currentJumpCounts = Number.MAX_SAFE_INTEGER;
        
        // Since nums[i] contains the max jump, we check the largest first
        for (let j=i+nums[i]; j>i; j--) {
            if (j > nums.length-1) continue;

            currentJumpCounts = Math.min(currentJumpCounts, cache[j]);
            //console.log(`  current=${currentJumpCounts}, cache[${j}]=${cache[j]}`);
        }

        cache[i] = 1 + currentJumpCounts;
        //console.log(`    cache[${i}]=${cache[i]} <= 1 + ${currentJumpCounts}`);
    }

    return cache[0];
};

let inputs = [
    { nums:[0], output:0 },
    { nums:[1], output:0 },
    { nums:[1,1], output:1 },
    { nums:[2,3,1,1,4], output:2 },
    { nums:[2,3,0,1,4], output:2 },
    { nums:[2,2,1,1,4], output:3 },
    { nums:[2,2,1,1,1,4], output:4 },
];

// Comparing scalar output
console.log(inputs.map(x => jump(x.nums) == x.output));