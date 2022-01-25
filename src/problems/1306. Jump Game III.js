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
    let result = bruteForce(arr, start);
    
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
let bruteForce = (arr, start) => {
};

let inputs = [
    { arr:[4,2,3,0,3,1,2], start:5, output:true },
    { arr:[4,2,3,0,3,1,2], start:0, output:true },
    { arr:[3,0,2,1,2], start:2, output:false },
];

// Comparing scalar output
console.log(inputs.map(x => canReach(x.arr, x.start) == x.output));