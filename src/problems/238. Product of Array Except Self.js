// https://leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`nums      :  ${nums}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = leftRight(nums);
    
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

// https://leetcode.com/problems/product-of-array-except-self/discuss/65622/Simple-Java-solution-in-O(n)-without-extra-space
// Calculate the left products of each item; save in an array.
// Calculate the right products of each item; save in another array.
// Multiple left and right of each item; return the result.
let leftRight = (nums) => {
    let result = new Array(nums);
    result[0] = 1;

    // Calculate the left products of each item
    for (let i=1; i<nums.length; i++) {
        result[i] = result[i-1] * nums[i-1];
    }
    console.log(`left: ${result}`);

    // Calculate the right products of each item
    let right = 1;
    for (let i=nums.length-1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }

    return result;
};

//let input = [1,2,3,4];
let input = [-1,1,0,-3,3];

let output = productExceptSelf(input);