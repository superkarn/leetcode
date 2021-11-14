// https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`x         :  ${x}`);

    // Pick the algorithm
    console.log('--Logs-------------------');
    let result = bruteForce(x.toString());
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);
    console.log('--------------------------');

    return result;
};

// attempt1: bruteForce, checking all first and last, converting to string
let bruteForce = (x) => {
    //console.log(`checking ${x}`);

    // if the number has length 1 or 0, it's always a palindrome
    if (x.length <= 1) {
        return true;
    }
    
    // compare the first and last numbers
    if (x[0] !== x[x.length-1]) {
        return false;
    }

    // trim the first and last number and see if the number is a palindrome
    return bruteForce(x.substring(1, x.length-1));
};

//let input = 12321;
let input = 1000021;
let output = isPalindrome(input);
console.log(output);