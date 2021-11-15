// https://leetcode.com/problems/roman-to-integer/
/**
 * @param {number} param1
 * @return {number}
 */
var romanToInt = function(s) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`s    :  ${s}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(s);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);
    console.log('--------------------------');

    return result;
};

// attempt1: description on the algorithm
let bruteForce = (s) => {
    // do something
    let result = 0;

    while (s.length > 0) {
        console.log(`  s: ${s}`);
        let charCount = 1;

        if (s[0] == 'M') {
            result += 1000;
        } else if (s[0] == 'D') {
            result += 500;
        } else if (s[0] == 'C') {
            if (s[1] == 'M') {
                result += 900;
                charCount = 2;
            } else if (s[1] == 'D') {
                result += 400;
                charCount = 2;
            } else {
                result += 100;
            }
        } else if (s[0] == 'L') {
            result += 50;
        } else if (s[0] == 'X') {
            if (s[1] == 'C') {
                result += 90;
                charCount = 2;
            } else if (s[1] == 'L') {
                result += 40;
                charCount = 2;
            } else {
                result += 10;
            }
        } else if (s[0] == 'V') {
            result += 5;
        } else if (s[0] == 'I') {
            if (s[1] == 'X') {
                result += 9;
                charCount = 2;
            } else if (s[1] == 'V') {
                result += 4;
                charCount = 2;
            } else {
                result += 1;
            }
        }
        
        s = s.substring(charCount, s.length);
    }

    return result;
};

let input = 'MCMXCIV';
let output = romanToInt(input);
console.log(output);