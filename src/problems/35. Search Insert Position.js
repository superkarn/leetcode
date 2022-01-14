// https://leetcode.com/problems/search-insert-position/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`nums    :  ${nums}`);
    console.log(`target    :  ${target}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = binarySearch(nums, target);
    
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
let binarySearch = (nums, target) => {
    let l = 0;
    let r = nums.length-1;
    let m = l + Math.floor((r-l)/2);
    
    //console.log(`l=${l}, m=${m}, r=${r}`);

    // Special cases
    if (target <= nums[0]) return 0;

    while (l <= r) {
        // Found exact match
        if (target == nums[m]) {
            //console.log(`  found ${target} at [${m}]`);
            return m;        
        } 
        // No match, but found where target should go
        else if (nums[m-1] < target && target < nums[m]) {
            //console.log(`  found ${target} between [${m-1}] and [${m}]`);
            return m;
        }
        // Target is in the left side
        else if (target < nums[m]) {
            r = m-1;
            //console.log(`  left side`);
        } 
        // Target is in the right side
        else {
            l = m+1;
            //console.log(`  right side`);
        }
        
        m = l + Math.floor((r-l)/2);
        //console.log(`    l=${l}, m=${m}, r=${r}`);
    }

    // not found, would append to the end
    console.log(`  go to the end`);
    return nums.length;
};

//let nums = [1,3,5,6], target = 0; // 0
//let nums = [1,3,5,6], target = 5; // 2
//let nums = [1,3,5,6], target = 2; // 1
//let nums = [1,3,5,6], target = 7; // 4
//let nums = [1,3,5,6], target = 2; // 1
//let nums = [1], target = 1; // 0
let nums = [1,3], target = 2; // 1
//let nums = [1,3,5,6,8,10,12,15,17], target = 9; // 5

let output = searchInsert(nums, target);