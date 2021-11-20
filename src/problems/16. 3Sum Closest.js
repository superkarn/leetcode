// https://leetcode.com/problems/3sum-closest/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`nums      :  ${nums}`);
    console.log(`target    :  ${target}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(nums, target);
    
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
let bruteForce = (nums, target) => {
    let result = Number.MAX_SAFE_INTEGER;

    // sort the array (has to explicitly compare numbers)
    nums.sort((a,b) => a-b);

    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            for (let k=j+1; k<nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if (Math.abs(target - sum) < Math.abs(target - result)) {
                    //console.log(`    found a new closest: ${sum} <- ${nums[i]} + ${nums[j]} + ${nums[k]}`);
                    result = sum;
                }
            }
        }
    }
    

    return result;
};


let input = [-1,2,1,-4];
//let input = [0,0,0,0,0,0];
let target = 1
let output = threeSumClosest(input, target);
console.log(output);