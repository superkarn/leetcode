// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(param1) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`param1    :  ${param1}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(param1);
    
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
let bruteForce = (param1) => {
    if (param1.length == 1) {
        return param1[0];
    }

    for (let i=0; i<param1.length; i++) {
        let previousIndex = i == 0 ? param1.length-1 : i-1;

        //console.log(`[${previousIndex}]: ${param1[previousIndex]} ? [${i}]: ${param1[i]}`);
        if (param1[previousIndex] > param1[i]) {
            return param1[i];
        }
    }

    throw new Error('Something went wrong.');
};

let input = [1];
//let input = [3,4,5,1,2]; // 1
//let input = [4,5,6,7,0,1,2]; // 0
//let input = [11,13,15,17]; // 11
let output = findMin(input);