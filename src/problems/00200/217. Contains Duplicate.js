// https://leetcode.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    //console.log(`nums      :  ${nums}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = usingSet(nums);
    
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
let usingSort = (nums) => {
    // sort the array
    nums.sort((a,b) => a-b);

    // Once sorted, duplicate numbers would be together
    for (let i=0; i<nums.length; i++) {
        if (nums[i] == nums[i-1]) {
            return true;
        }
    }

    return false;
};

let usingSet = (nums) => {
    let s = new Set(nums);
    return nums.length != s.size;
};


let inputs = [
    { nums:[1,2,3,1], output:true },
    { nums:[1,2,3,4], output:false },
    { nums:[1,1,1,3,3,4,3,2,4,2], output:true },
];

// Comparing scalar output
console.log(inputs.map(x => containsDuplicate(x.nums) == x.output));