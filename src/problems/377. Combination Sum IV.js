// https://leetcode.com/problems/combination-sum-iv/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`nums      :  ${nums}`);
    console.log(`target    :  ${target}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = dp(nums, target);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result);
    console.log('--------------------------');

    return result;
};

// Recursive DP
// https://www.youtube.com/watch?v=dw2nMCxG0ik
let dp = (nums, target) => {
    let cache = [1];
    return dp_recursive(nums, target, cache);
};
let dp_recursive = (nums, target, cache) => {
    // If we've calcualted this before, return the cached value
    if (cache[target] >= 0) {
        return cache[target];
    }

    let result = 0;
    for (let i=0; i<nums.length; i++) {
        // Only add to result if target-nums[i] >= 0
        if (target-nums[i] >= 0) {
            //console.log(`    checking ${target}-${nums[i]} = ${target-nums[i]}`);
            result += dp_recursive(nums, target-nums[i], cache);
        }
    }

    // Save the value in the cache
    cache[target] = result;
    //console.log(`  cache[${target}] = ${result}`);

    return result;
};

let inputs = [
    { nums:[1,2,3], target:4, output:7 },
    { nums:[9], target:3, output:0 },
    { nums:[2,4,6], target:6, output:4 },
    { nums:[2,4,6], target:10, output:13 },
    { nums:[10,20,30], target:999, output:0 },
    { nums:[111], target:999, output:1 },
    { nums:[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500,510,520,530,540,550,560,570,580,590,600,610,620,630,640,650,660,670,680,690,700,710,720,730,740,750,760,770,780,790,800,810,820,830,840,850,860,870,880,890,900,910,920,930,940,950,960,970,980,990,111],
        target:999, output: 1},
];

// Comparing scalar output
console.log(inputs.map(x => combinationSum4(x.nums, x.target) == x.output));