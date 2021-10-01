// https://leetcode.com/problems/string-to-integer-atoi/
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    return attempt1(s);
};

// attempt1: description on the algorithm
let attempt1 = (s) => {
    //console.log(`s-original: ${s}`);
    
    let result = "";
    s = (s+"").trimLeft();
    //console.log(`s-trimmed: ${s}`);
    
    // Return 0 if the string is now empty
    if (s.length == 0) {
        //console.log(`string is empty.`);
        return 0;
    }
    
    // Check for the sign.
    // If the string starts with a sign, track it, 
    // then remove it from the string.
    let sign = (s[0] == '-') ? -1 : 1;
    if (s[0] == '-' || s[0] == '+') {
        s = s.slice(1);
        //console.log(`s-no-sign: ${s}`);
    }
    
    // Return 0 if the string starts with a non-number
    if (isNaN(parseInt(s[0]))) {
        //console.log(`string starts with non-number.`);
        return 0;
    }
    
    //console.log(`s-number: ${s}`)
    
    for (let ii = 0; ii < s.length; ii++) {
        if (!isNaN(parseInt(s[ii]))) {
            result += s[ii]
            //console.log(`${ii}: ${s[ii]} -> ${result}`);
        } else {
            break;
        }
    }
    
    // add the sign back
    result = sign * result;
    
    // check for int32 bound
    let lowerBound = -Math.pow(2,31);
    //console.log(`lowerBound: ${lowerBound}`);
    if (result < lowerBound) {
        result = lowerBound;
    }
    
    let upperBound = Math.pow(2,31)-1;
    //console.log(`upperBound: ${upperBound}`);
    if (result > upperBound) {
        result = upperBound;
    }
    
    return result;
};

let input = "42";
//let input = "   -42";
//let input = "4193 with words";
//let input = "words and 987";
//let input = "-91283472332";

let output = myAtoi(input);
console.log(output);