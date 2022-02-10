// https://leetcode.com/problems/house-robber-ii/
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

// DP, modified from #198
let dp = (nums) => {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];
    
    return Math.max(
            rob1(nums.slice(1)), 
            rob1(nums.slice(0,nums.length-1))
    );
};

let rob1 = (nums) => {
    //console.log(`  nums: ${nums}`);

    // Special cases
    if (nums.length == 0) return 0;

    let cache1 = 0; // dp[i-1]
    let cache2 = 0; // dp[i-2]

    for (let i=0; i<nums.length-1; i++) {
        let tmp = cache1;
        cache1 = Math.max(cache2+nums[i], cache1);
        cache2 = tmp;
        //console.log(`  cache1 = ${cache1}, cache2 = ${cache2}`);
    }

    // Check if the last one conflicts with the first
    cache1 = Math.max(cache2+nums[nums.length-1], cache1);

    //console.log(`    result: ${cache1}`);
    return cache1;
};

let inputs = [
    { nums:[], output:0 },
    { nums:[1], output:1 },
    //{ nums:[2,3,2], output:3 },
    //{ nums:[1,2,3,1], output:4 },
    //{ nums:[1,2,3], output:3 },
];

// Comparing scalar output
console.log(inputs.map(x => rob(x.nums) == x.output));