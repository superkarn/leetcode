// https://leetcode.com/problems/house-robber/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
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

// Dynamic Programming
//  cache[i] = nums[i] + max(cache[i-2], cache[i-3])
//  result = cache[nums.lenght-1]
let dp = (nums) => {
    // Special cases
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];
    if (nums.length == 2) return Math.max(...nums);
    
    let cache = [];

    // Caculate the first 3 for optimization
    cache[0] = nums[0];
    cache[1] = Math.max(nums[0], nums[1]);
    cache[2] = Math.max(nums[0], nums[1], nums[2], nums[0]+nums[2]);

    for (let i=3; i<nums.length; i++) {
        cache[i] = nums[i] + Math.max(cache[i-2], cache[i-3]);
        //console.log(`  cache[${i}] = ${cache[i]} = ${nums[i]} + Math.max(${cache[i-2]}, ${cache[i-3]})`);
    }

    return Math.max(...cache);
};

let inputs = [
    { nums:[], output:0 },
    { nums:[2], output:2 },
    { nums:[2,3], output:3 },
    { nums:[1,2,3,1], output:4 },
    { nums:[2,7,9,3,1], output:12 },
    { nums:[1,3,1,3,100], output:103 },
];

// Comparing scalar output
console.log(inputs.map(x => rob(x.nums) == x.output));