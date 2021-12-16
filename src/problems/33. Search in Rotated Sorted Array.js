// https://leetcode.com/problems/search-in-rotated-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`nums      :  ${nums}`);
    console.log(`target    :  ${target}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteforce(nums, target);
    
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
let bruteforce = (nums, target) => {
};

let input = [4,5,6,7,0,1,2]; let target = 0; // 4

let output = search(input, target);