// https://leetcode.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`nums1     :  ${nums1}`);
    console.log(`m         :  ${m}`);
    console.log(`nums2     :  ${nums2}`);
    console.log(`n         :  ${n}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(nums1, m, nums2, n);
    
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
let bruteForce = (nums1, m, nums2, n) => {
    return [];
};

let inputs = [
    { nums1:[1,2,3,0,0,0], m:3, nums2:[2,5,6], n:3, output:[1,2,2,3,5,6] },
    { nums1:[1], m:1, nums2:[], n:0, output:[1] },
    { nums1:[0], m:0, nums2:[1], n:1, output:[1] },
];

// Comparing array output
console.log(inputs.map(x => {
    let results = merge(x.matrix)
    if (x.output.length != results.length) return false;

    return v === x.output[i];
}));