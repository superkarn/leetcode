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

// Finding the largest of the two array, putting it to the end of nums1.
// Then work toward smaller numbers
let bruteForce = (nums1, m, nums2, n) => {
    // Special cases
    if (m == 0) {
        // Put all of nums2 into nums1
        nums1.map((v,i) => nums1[i] = nums2[i]);
        return nums1;
    }


    // Index of the result
    let ir = nums1.length-1;

    while (m>0 && n>0) {
        //console.log(`  checking [${m-1}] ${nums1[m-1]} vs [${n-1}] ${nums2[n-1]}`);

        // Move m
        if (nums1[m-1] > nums2[n-1]) {
            nums1[ir] = nums1[m-1];
            //console.log(`    moved ${nums1[ir]} from nums1[${m-1}] to [${ir}]`);
            m--;
        } else {
            nums1[ir] = nums2[n-1];
            //console.log(`    moved ${nums1[ir]} from nums2[${m-1}] to [${ir}]`);
            n--;
        }

        ir--;
    }
    
    // If nums1 runs out before nums2, move the rest of nums2 over
    if (n > 0) {
        for (let i=0; i<n; i++) {
            nums1[i] = nums2[i];
        }
    }

    return nums1;
};

let inputs = [
    { nums1:[1,2,3,0,0,0], m:3, nums2:[2,5,6], n:3, output:[1,2,2,3,5,6] },
    { nums1:[1], m:1, nums2:[], n:0, output:[1] },
    { nums1:[0], m:0, nums2:[1], n:1, output:[1] },
    { nums1:[0,0,0], m:0, nums2:[1,2,3], n:3, output:[1,2,3] },
    { nums1:[1,2,3], m:3, nums2:[], n:0, output:[1,2,3] },
    { nums1:[2,0], m:1, nums2:[1], n:1, output:[1,2] },
    { nums1:[4,0,0,0], m:1, nums2:[1,2,3], n:3, output:[1,2,3,4] },
];

// Comparing array output
console.log(inputs.map(x => merge(x.nums1, x.m, x.nums2, x.n).every((v,i) => v === x.output[i])));