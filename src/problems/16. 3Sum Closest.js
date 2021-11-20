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
    let result = attempt2(nums, target);
    
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

// attempt2: loop through first number, and use 2-pointer for 2nd and 3rd numbers
let attempt2 = (nums, target) => {
    let result = Number.MAX_SAFE_INTEGER;

    // sort the array (has to explicitly compare numbers)
    nums.sort((a,b) => a-b);

    for (let i=0; i<nums.length; i++) {
        let left = i+1;
        let right = nums.length-1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            //console.log(`  ${sum} <- ${nums[i]} + ${nums[left]} + ${nums[right]}`);

            // If sum is too small, try larger by moving left
            if (sum < target) {
                // if this sum is closer to target than what we have so far, update result
                if (Math.abs(target-sum) < Math.abs(target-result)) {
                    //console.log(`found closer match 1: ${sum}`);
                    result = sum;
                }

                left++;
            } 
            // If sum is too large, try smaller by moving right
            else if (sum > target) {
                // if this sum is closer to target than what we have so far, update result
                if (Math.abs(target-sum) < Math.abs(target-result)) {
                    //console.log(`found closer match 2: ${sum}`);
                    result = sum;
                }

                right--;
            } 
            // Else found exact match
            else {
                //console.log(`found exact match: ${sum}`);
                result = sum;
                break;
            }
        }
    }

    return result;
};


//let input = [-1,2,1,-4]; let target = 1;
//let input = [0,0,0,0,0,0]; let target = 1;
let input = [0,1,2]; let target = 3;

let output = threeSumClosest(input, target);
console.log(output);