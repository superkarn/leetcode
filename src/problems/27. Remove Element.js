// https://leetcode.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`nums      :  ${nums}`);
    console.log(`val       :  ${val}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(nums, val);
    
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
let bruteForce = (nums, val) => {
    let uniqueNumbers = nums.length;

    for (let i=0; i<uniqueNumbers; i++) {
        //console.log(`   nums[${i}] (${nums[i]})`);

        if (nums[i] == val) {
            //console.log(`      ${nums}`);
            //console.log(`      shifting`);
            for (let j=i; j<nums.length; j++) {
                nums[j] = nums[j+1];
            }
            nums[nums.length-1] = val;
            //console.log(`      ${nums}`);

            // Since we just moved i to the end, check i again
            // whicih should now has the next value
            i--;

            // Also decrement the loop termination index
            uniqueNumbers--;
        }
    }
    
    // Kind of cheating using filter()
    return nums.filter(x => x!=val).length;
};

//let nums = [3,2,2,3], val = 3; // 2
let nums = [0,1,2,2,3,0,4,2], val = 2; // 5

let output = removeElement(nums, val);