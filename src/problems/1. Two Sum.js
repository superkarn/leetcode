// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log(`nums      :  ${nums}`);
    console.log(`target    :  ${target}`);
    
    
    //let result = bruteForce(nums, target);
    //let result = twoPointers(nums, target);
    let result = dictionaryApproach(nums, target);    

    let endTime = Date.now();
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);
    console.log('--------------------------');

    return result;
};

// Brute force approach: O(n^2)
// Loop through all the items,
// For each of these, loops through all the items after the current item.
// If their sums equals the target, we found the answer.
let bruteForce = (nums, target) => {
    for (var ii=0; ii < nums.length; ii++) {
        for (var jj=ii+1; jj < nums.length; jj++) {        
            if (nums[ii] + nums[jj] == target) {
                return [ii, jj];
            }
        }
    }
    
    return [];
};

// Two Pointers approach: O(n)
//    * only works if the input is sorted
// https://leetcode.com/problems/two-sum/discuss/17/Here-is-a-Python-solution-in-O(n)-time/595114
// Left pointer starts from 0th item.
// Right pointer starts from last item.
// If the sum is less than target, move left pointer right one spot.
// If the sum is greater than target, move the right pointer left one spot.
// Else the sum is equal to the target, return left and right.
let twoPointers = (nums, target) => {
    let left = 0;
    let right = nums.length-1;
    let result = [];

    // First sort the array
    nums.sort((a, b) => a-b);

    while (left < right) {
        let sum = nums[left] + nums[right];
        
        console.log(`${nums[left]} + ${nums[right]} = ${sum}`);
        if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        } else {
            result = [left, right];
            break;
        }
    }
    
    return result;
};


// Dictionary approach: O(n), but requires space O(n) as well
// https://leetcode.com/problems/two-sum/discuss/17/Here-is-a-Python-solution-in-O(n)-time/595114
// Since it's guaranteed to only have one pair, we know that nums[a] + nums[b] = target.
// This means nums[a] = target - nums[b].
// So for each nums[i], we check if it is already in the buffer dicionary.
// If it is not, we save i in the dictionary with the key [target-nums[i]] (which is the complimentary value nums[b]).
// If it is, we return the previous complimentary index (i.e. buffer[nums[i]]) and the current index.
let dictionaryApproach = (nums, target) => {
    let buffer = {};
    for (let i=0; i<nums.length; i++) {
        if (nums[i] in buffer) {
            return [buffer[nums[i]], i];
        } else {
            buffer[target-nums[i]] = i;
        }
    }
    return [];
};

//let input = [2,7,11,15];
let input = [3,2,4];
let target = 6;
let output = twoSum(input, target);
console.log(output);