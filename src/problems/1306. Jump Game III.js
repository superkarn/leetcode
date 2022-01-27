// https://leetcode.com/problems/jump-game-iii/
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`arr       :  ${arr}`);
    console.log(`start     :  ${start}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = dp(arr, start);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result);
    console.log('--------------------------');

    return result;
};

// Dynamic programming
let dp = (arr, start) => {
    // Cache[i] tracks whether you can reach target from arr[i]
    let cache = [];
    return dp_recursive(arr, start, cache);
};
let dp_recursive = (arr, start, cache) => {
    // Special cases
    if (!arr) return false;
    if (arr.length == 0) return false;

    // If this index has already been looked at (i.e. has a value in the cache),
    // and the value is true/false, then return the value.
    if (cache[start] === false || cache[start] === true) {
        return cache[start];
    }

    // If this index has already been looked at (i.e. has a value in the cache),
    // and the value is -1 (meaning it hasn't finished calculating), then it's
    // a cycle.  Return false
    if (cache[start] === -1) {
        cache[start] = false;
        //console.log(`  1 [${start}](${arr[start]}) -> ${cache[start]}`);
        return cache[start];
    }

    // If this index's value is 0, we found the target, return true
    if (arr[start] == 0) {
        cache[start] = true;
        //console.log(`  2 [${start}](${arr[start]}) -> ${cache[start]}`);
        return cache[start];
    }

    // Mark this index as being looked at
    cache[start] = -1;

    let leftIndex = start - arr[start];
    let rightIndex = start + arr[start];
    let leftValue = false;
    let rightValue = false;

    if (leftIndex >= 0) {
        leftValue = dp_recursive(arr, leftIndex, cache);
    }

    if (rightIndex < arr.length) {
        rightValue = dp_recursive(arr, rightIndex, cache);
    }

    cache[start] = leftValue || rightValue;
    //console.log(`  3 [${start}](${arr[start]}) -> ${cache[start]}`);
    return cache[start];
};

let inputs = [
    { arr:[4,2,3,0,3,1,2], start:5, output:true },
    { arr:[4,2,3,0,3,1,2], start:0, output:true },
    { arr:[3,0,2,1,2], start:2, output:false },
];

// Comparing scalar output
console.log(inputs.map(x => canReach(x.arr, x.start) == x.output));