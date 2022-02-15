// https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`s         :  ${s}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(s);
    
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
let bruteForce = (s) => {

    s = s.replace(/[^a-z0-9]+/gi, '')   // Remove all non-alphanumeric     
         .toLowerCase();                // Change to all lower case    

    let mid = Math.floor(s.length/2);
    //console.log(`  s:   ${s}`);
    //console.log(`  mid: ${mid} = ${s[mid]}`);

    for (let i=0; i<=mid; i++) {
        //console.log (`    ${i}: ${s[i]} vs ${s[s.length-1-i]}`)
        if (s[i] != s[s.length-1-i]) {
            return false;
        }
    }

    return true;
};

let inputs = [
    { s:"A man, a plan, a canal: Panama", output:true },
    { s:"race a car", output:false },
    { s:"Poor Dan is in a droop", output:true },
    { s:"Sit on a potato pan, Otis", output:true },
    { s:"", output:true },
    { s:" ", output:true },
];

// Comparing scalar output
console.log(inputs.map(x => isPalindrome(x.s) == x.output));
