// https://leetcode.com/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`s         :  ${s}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = fromRight(s);
    
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
let builtInMethods = (s) => {
    let words = s.split(' ').filter(x => x != '' && x != ' ');
    let lastWord = words[words.length-1];

    return lastWord.length;
};

// Iterate from the end
let fromRight = (s) => {
    let startOfLastWord = 0;
    let endOfLastWord = -1;

    for (let i=s.length-1; i>=0; i--) {
        //console.log(`  [${i}]: ${s[i]} from ${startOfLastWord} to ${endOfLastWord}`);

        // If the current character is a space
        if (s[i] == ' ') {
            // If there's no word yet, go to next iteration
            if (endOfLastWord == -1) {
                //console.log(`    no last word yet`);
                continue;
            }

            // Else we found the beginning of the last word
            startOfLastWord = i+1;
            break;
        } 
        // Else we check to see if endOfLastWord has been set.  If not, set it to the current i 
        else if (endOfLastWord == -1) {
            endOfLastWord = i;
            //console.log(`    found end of last word: ${endOfLastWord}`);
        }
    }

    return endOfLastWord - startOfLastWord +1;
};

let s = "Hello World"; // 5
//let s = "   fly me   to   the moon  "; // 4
//let s = "luffy is still joyboy"; // 6
//let s = ""; // 0
//let s = "  "; // 0
//let s = "  a"; // 1
//let s = "  aaa  "; // 3
//let s = "aaa"; // 3

let output = lengthOfLastWord(s);