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
let bruteforce = (nums, target) => {
    if (nums[0] == target) return 0;

    for (let i=1; i<nums.length; i++) {
        if (nums[i] == target) {
            return i;
        }
    }

    // target not found
    return -1;
};

let binarySearch = (nums, target) => {
    let l = 0;
    let r = nums.length-1;

    while (l < r) {
        let mid = Math.floor((l+r)/2);
        console.log(`  l: ${l}, mid: ${mid}, r: ${r}`);
        
        // TODO
    }

    return (nums[l] == target) ? l : -1;
};


//let input = [4,5,6,7,0,1,2]; let target = 0; // 4
//let input = [4,5,6,7,0,1,2]; let target = 3; // -1
//let input = [1]; let target = 0; // -1
//let input = [1]; let target = 1; // 0
//let input = [1,3]; let target = 3; // 1
//let input = [5,1,3]; let target = 1; // 1
//let input = [4,5,6,7,0,1,2]; let target = 3; // -1
//let input = [4,5,6,7,0,1,2]; let target = 1; // 5
let input = [4,5,6,7,0,1,2]; let target = 6; // 2

let output = search(input, target);