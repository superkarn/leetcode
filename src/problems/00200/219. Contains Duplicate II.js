// https://leetcode.com/problems/contains-duplicate-ii/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
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

// Use brute force and check all numbers via nested loops
let bruteForce = (nums, k) => {
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length && j<i+1+k; j++) {
            if (nums[i] == nums[j]) {
                return true;
            }
        }
    }

    return false;
};

// Use sliding window.  Each time the window moves, 
// remove the first number from the set.  Then try to add the new
// number.  If the set size grows, then the new number is not 
// a duplicate.  Continue until the end.
let slidingWindow = (nums, k) => {
    let s = new Set();

    for (let i=0; i<nums.length; i++) {
        // Remove the number that went outside the window
        if (i>k) {
            s.delete(nums[i-k-1]);
        }

        // If the set has the new number, then it's a duplicate
        if (s.has(nums[i])) return true;

        // If not, then add it to the set
        s.add(nums[i]);
    }

    return false;
};

let inputs = [
    { nums:[1,2,3,1], k:3, output:true },
    { nums:[1,0,1,1], k:1, output:true },
    { nums:[1,2,3,1,2,3], k:2, output:false },
];

// Comparing scalar output
console.log(inputs.map(x => containsNearbyDuplicate(x.nums, x.k) == x.output));
