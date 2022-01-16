// https://leetcode.com/problems/plus-one/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`digits    :  ${digits}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(digits);
    
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
let bruteForce = (digits) => {
    let result = digits;

    return result;
};


let inputs = [
    { digits:[1,2,3], output:[1,2,4] },
    { digits:[4,3,2,1], output:[4,3,2,2] },
    { digits:[9], output:[1,0] },
];

console.log(inputs.map(x => plusOne(x.digits) == x.output));