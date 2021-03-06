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
    // increment the last digit
    digits[digits.length-1]++;

    // start from the end, and go backward
    for (let i=digits.length-1; i>=0; i--) {
        //console.log(`  [${i}] = ${digits[i]}: ${digits}`);
        // if the digit is 10, change it to 0, and update carry over
        if (digits[i] == 10) {
            //console.log(`    found 10`); 
            digits[i] = 0;

            // If i-1 exist, increment the value
            if (i > 0) {
                digits[i-1]++;
            }
            // Else we go to the front of the array, and 
            // we have to add 1 to the front.
            else {
                digits.unshift(1);
            }
        }
    }

    return digits;
};

// Optimized solution 
// https://leetcode.com/problems/plus-one/discuss/24082/My-Simple-Java-Solution
let optimized = (digits) => {
    // start from the end, and go backward
    for (let i=digits.length-1; i>=0; i--) {
        // If the current number is less than 9, increment it and return
        // Since there's no more need to increment
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        // Else the current number is 9, which means it would get incremented to 10
        // So we set it to 0 and go to the next number
        digits[i] = 0;
    }

    // If we get here, then all the numbers are 9, and we need to add 1 to the front
    digits.unshift(1);

    return digits;
};

let inputs = [
    { digits:[1,2,3], output:[1,2,4] },
    { digits:[4,3,2,1], output:[4,3,2,2] },
    { digits:[1,1,1,9], output:[1,1,2,0] },
    { digits:[1,9,9,9], output:[2,0,0,0] },
    { digits:[1,9,1,9], output:[1,9,2,0] },
    { digits:[9], output:[1,0] },
    { digits:[9,9,9], output:[1,0,0,0] },
];

console.log(inputs.map(x => plusOne(x.digits).every((v,i) => v === x.output[i])));