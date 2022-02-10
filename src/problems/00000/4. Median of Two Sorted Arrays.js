// https://leetcode.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    return attempt1(nums1, nums2);
};

// attempt1: description on the algorithm
let attempt1 = (nums1, nums2) => {
    let result = 0;
    
    // merge the two array, while keeping them sorted
    let mergedArray = []
    let i=0, j=0;
    while(i<nums1.length && j<nums2.length) {
        if (nums1[i] <= nums2[j]) {
            mergedArray.push(nums1[i]);
            i++;
        } else {
            mergedArray.push(nums2[j]);
            j++;
        }
    }
    
    // Add the rest of the left over array
    if (i<nums1.length) {
        let temp = nums1;
        let temp2 = temp.splice(i);
        mergedArray.push(...temp2);
        //console.log(`adding left over from nums1 at i=${i}: ${temp2}`);
    }
    
    if (j<nums2.length) {
        let temp = nums2;
        let temp2 = temp.splice(j);
        mergedArray.push(...temp2);
        //console.log(`adding left over from nums1 at j=${j}: ${temp2}`);
    }
    
    //console.log(`mergedArray: ${mergedArray}`);
    
    // Find the median
    // If result has even items, the median is middle two / 2
    if (mergedArray.length % 2 == 0){
        let leftMiddleIndex = (mergedArray.length/2)-1;
        let rightMiddleIndex = leftMiddleIndex+1;
        //console.log(`leftMiddleIndex: ${leftMiddleIndex}, rightMiddleIndex: ${rightMiddleIndex}`);
        result = (mergedArray[leftMiddleIndex] + mergedArray[rightMiddleIndex]) / 2;
    } 
    // else result has odd items, the median is the middle item
    else {
        result = mergedArray[Math.floor(mergedArray.length/2)];
    }
        
    
    return result;
};

let input1 = [1,3], input2 = [2];
//let input1 = [1,2], input2 = [3,4];
//let input1 = [0,0], input2 = [0,0];
//let input1 = [], input2 = [1];
//let input1 = [2], input2 = [];

let output = findMedianSortedArrays(input1, input2);
console.log(output);