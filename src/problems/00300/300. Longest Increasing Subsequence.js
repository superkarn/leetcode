// https://leetcode.com/problems/longest-increasing-subsequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`nums    :  ${nums}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = viaBinarySearchWithFullSequence(nums);
    
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
let dp = (nums) => {
    let result = nums;

    return result;
};

// https://www.geeksforgeeks.org/longest-monotonically-increasing-subsequence-size-n-log-n/
let viaBinarySearch = (nums) => {
    if (!nums || nums.length == 0) {
        return 0;
    }

    // This array tracks the tail/last/largest number of each subsequence.
    let tailTable = Array(nums.length).fill(0);

    // Set the first tail to the first value.
    // The first tail will always be the smallest tail.
    tailTable[0] = nums[0];

    // This variable tracks the length of the current subsequence.
    let length = 1;

    for (let i=1; i<nums.length; i++) {
        // If nums[i] is smallest among all end 
        // candidates of active lists, we will start 
        // new active list of length 1.
        if (nums[i] < tailTable[0]) {
            tailTable[0] = nums[i];
            //console.log(`  A: tailTable[0] = ${tailTable[0]}`);
        } 
        // If nums[i] is largest among all end candidates of 
        // active lists, we will clone the largest active 
        // list, and extend it by nums[i].
        else if (nums[i] > tailTable[length-1]) {
            tailTable[length++] = nums[i];
            //console.log(`  B: tailTable[${length-1}] = ${tailTable[length-1]}`);
        }
        // If nums[i] is in between, we will find a list with 
        // largest end element that is smaller than nums[i]. 
        // Clone and extend this list by nums[i]. We will discard all
        // other lists of same length as that of this modified list.
        else {
            let indexOfLargestSmallerThan = getIndexOfLargestSmallerThan(tailTable, nums[i], -1, length-1);
            tailTable[indexOfLargestSmallerThan] = nums[i];
            //console.log(`  C: tailTable[${indexOfLargestSmallerThan}] = ${tailTable[indexOfLargestSmallerThan]}`);
        }

        //console.log(`   : ${tailTable}`);
    }

    return length;
};
let getIndexOfLargestSmallerThan = (list, target, left, right) => {
    while (left < right-1) {
        let mid = left + parseInt((right-left)/2);

        if (list[mid] >= target) {
            right = mid;
        } else {
            left = mid;
        }
    }

    return right;
};

let viaBinarySearchWithFullSequence = (nums) => {
    if (!nums || nums.length == 0) {
        return 0;
    }

    // This array tracks the subsequences of each length, starting from 1.
    let tailTable = Array(nums.length).fill([]);

    // Set the first tail to the first value.
    // The first tail will always be the smallest tail.
    tailTable[0] = [nums[0]];

    // This variable tracks the length of the current subsequence.
    let length = 1;

    console.log(`   : ${tailTable.reduce((acc, curr) => acc += `[${curr}] `, '')}`);
    console.log(``);

    for (let i=1; i<nums.length; i++) {
        let smallestEnd = tailTable[0][tailTable[0].length-1];
        let largestEnd = tailTable[length-1][tailTable[length-1].length-1];

        console.log(`---- length:${length}, smallest:${smallestEnd} <? nums[${i}]:${nums[i]} <? largest:${largestEnd}`);

        // If nums[i] is smallest among all end 
        // candidates of active lists, we will start 
        // new active list of length 1.
        if (nums[i] < smallestEnd) {
            tailTable[0] = [nums[i]];
            console.log(`  A: ${nums[i]}: tailTable[0] = ${tailTable[0]}`);
        } 
        // If nums[i] is largest among all end candidates of 
        // active lists, we will clone the largest active 
        // list, and extend it by nums[i].
        else if (nums[i] > largestEnd) {
            tailTable[length] = [...tailTable[length-1], nums[i]];
            console.log(`  B: ${nums[i]}: tailTable[${length}] = ${tailTable[length]}`);
            length++;
        }
        // If nums[i] is in between, we will find a list with 
        // largest end element that is smaller than nums[i]. 
        // Clone and extend this list by nums[i]. We will discard all
        // other lists of same length as that of this modified list.
        // TODO a bug when having duplicate starting numbers, like [1,1]
        else {
            let indexOfLargestSmallerThan = getIndexOfLargestSmallerThan2(tailTable, nums[i], -1, length-1);
            indexOfLargestSmallerThan = indexOfLargestSmallerThan < 1 ? 1 : indexOfLargestSmallerThan;
            console.log(`      indexOfLargestSmallerThan: ${indexOfLargestSmallerThan}`);

            tailTable[indexOfLargestSmallerThan] = [...tailTable[indexOfLargestSmallerThan-1], nums[i]];
            console.log(`  C: ${nums[i]}: tailTable[${indexOfLargestSmallerThan}] = ${tailTable[indexOfLargestSmallerThan]}`);
        }

        console.log(`   : ${tailTable.reduce((acc, curr) => acc += `[${curr}] `, '')}`);
        console.log(``);
    }

    // Return the longest sequence length
    //return Math.max(...tailTable.map((value) => value.length));

    // Return the longest sequence
    let emptyListRemoved =  tailTable.filter(x => x.length > 0);
    return emptyListRemoved[emptyListRemoved.length-1];
};
let getIndexOfLargestSmallerThan2 = (list, target, left, right) => {
    while (left < right-1) {
        let mid = left + parseInt((right-left)/2);

        if (list[mid][list[mid].length-1] >= target) {
            right = mid;
        } else {
            left = mid;
        }
    }

    return right;
};


//let input = [10,9,2,5,3,7,101,18]; // 4
//let input = [0,1,0,3,2,3]; // 4
//let input = [7,7,7,7]; // 1
let input = [0,0]; // 1

//let input = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]; // 6


let output = lengthOfLIS(input);