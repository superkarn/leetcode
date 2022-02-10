// https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    return attempt1(x);
};

// attempt1: description on the algorithm
let attempt1 = (x) => {
    // if x is "larger" than int32, return 0
    if (Math.abs(x) > Math.pow(2, 31) -1) {
        return 0;
    }
    
    // Remember the sign
    let sign = x >= 0 ? 1 : -1;
    
    // Take the absolute value
    x = Math.abs(x);

    let result = 0;
    while (x > 0) {
        result = (result*10) + (x%10);
        //console.log(result);
        x = Math.floor(x/10);
    }
    
    // if result is "larger" than int32, return 0
    if (Math.abs(result) > Math.pow(2, 31) -1) {
        return 0;
    }
    
    return sign * parseInt(result);
};

let input = 123;
//let input = -123;
//let input = 120;
//let input = 0;

let output = reverse(input);
console.log(output);