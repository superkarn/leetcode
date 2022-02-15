// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`s    :  ${s}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = stack2(s);
    
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
let stack = (s) => {
    if (!s || s.length == 0) {
        return true;
    }

    const OPEN_BRACKETS = '({[';
    const CLOSE_BRACKETS = ')}]';

    let stack = [];

    for (let i=0; i<s.length; i++) {
        //console.log(`  ${i} is ${s[i]}`);
        // If the char is open bracket, add to stack
        if (OPEN_BRACKETS.indexOf(s[i]) > -1) {
            stack.push(s[i]);
            //console.log(`    ${i} adding ${s[i]}`);

        } else {
            // If the char is close bracket,
            if (CLOSE_BRACKETS.indexOf(s[i]) > -1) {
                // If the top of stack is a matching open bracket, pop it
                if (OPEN_BRACKETS.indexOf(stack[stack.length-1]) == CLOSE_BRACKETS.indexOf(s[i])) {
                    let t = stack.pop();
                    //console.log(`   ${i} removing ${t} because of ${s[i]}`);
                } 
                // else invalid string
                else {
                    //console.log(`    ${i}: not matching`)
                    return false;
                }
            } else {
                console.log(`    something went wrong`);
            }
        }
    }

    // At the end, there should not be anything left in the stack
    return stack.length == 0;
};

// optimized
// https://leetcode.com/problems/valid-parentheses/discuss/9178/Short-java-solution
let stack2 = (s) => {
    if (!s || s.length == 0) {
        return true;
    }

    const OPEN_BRACKETS = '({[';
    const CLOSE_BRACKETS = ')}]';

    let stack = [];

    for (let i=0; i<s.length; i++) {
        //console.log(`  ${i}: ${stack}`);
        if (OPEN_BRACKETS.indexOf(s[i]) > -1) {
            // Push the matching close bracket into the stack
            stack.push(CLOSE_BRACKETS[OPEN_BRACKETS.indexOf(s[i])]);
        } 
        else if (stack.length<=0 || stack.pop() != s[i]) {
            return false;
        }
    }

    return stack.length == 0;
};

let inputs = [
    { s:"()", output:true },
    { s:"()[]{}", output:true },
    { s:"(])", output:false },
    { s:"()[[][{}]]{}", output:true },
    { s:"()[[][}]]{}", output:false },
];

// Comparing scalar output
console.log(inputs.map(x => isValid(x.s) == x.output));
