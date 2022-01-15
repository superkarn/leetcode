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
    let result = builtInMethods(s);
    
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

//let s = "Hello World"; // 5
//let s = "   fly me   to   the moon  "; // 4
let s = "luffy is still joyboy"; // 6

let output = lengthOfLastWord(s);