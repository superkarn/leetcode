// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`nums      :  ${nums}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(nums);
    
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
let bruteForce = (nums) => {
    if (!nums || nums.length == 0) return 0;

    let indexUnique = 0;
    for (let i=1; i<nums.length; i++) {
        // If next number is greater than current number
        if (nums[i] > nums[indexUnique]) {
            // Increment indexUnique
            indexUnique++;

            // Move the current number to indexUnique
            nums[indexUnique] = nums[i];
        }
        // else do nothing, go to the next number
    }

    return indexUnique+1;
};

//let input = [1,1,2]; // 2
let input = [0,0,1,1,1,2,2,3,3,4]; // 5

let output = removeDuplicates(input);
console.log(`input is now ${input}`);