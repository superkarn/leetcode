// https://leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    //console.log(`nums      :  ${nums}`);

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

// bruteForce: loop through all the combinations
let bruteForce = (nums) => {
    let result = [];
    for (let i=0; i<nums.length; i++) {
        let product = 1;
        for (let j=0; j<nums.length; j++) {
            if (j != i) {
                product *= nums[j];
            }
        }
        result.push(product);
    }

    return result;
};

//let input = [1,2,3,4];
let input = [-1,1,0,-3,3];

let output = productExceptSelf(input);