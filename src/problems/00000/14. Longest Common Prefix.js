// https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`strs    :  ${strs}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = sortThenCompareFirstLast(strs);
    
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
let bruteForce = (strs) => {
    if (strs.length == 0) {
        return '';
    }

    if (strs[0].length == 0) {
        return '';
    }

    let result = '';

    for (let j=0; j<strs[0].length; j++) {
        let currentLetter = strs[0].substring(j,j+1);
        for (let i=0; i<strs.length; i++) {
            //console.log(`  [${i}, ${j}] ${currentLetter} ? ${strs[i].substring(j,j+1)}`);
            if (strs[i].substring(j,j+1) != currentLetter) {
                //console.log(`    found mismatch`);
                return result;
            }
        }
        result += currentLetter;
    }

    return result;
};

// attemmp2: sort the array, then compare first and last elements
// https://leetcode.com/problems/longest-common-prefix/discuss/6924/Sorted-the-array-Java-solution-2-ms
let sortThenCompareFirstLast = (strs) => {
    if (strs.length == 0) {
        return '';
    }

    // sort the array
    strs.sort();

    let result = '';
    let first = strs[0];
    let last = strs[strs.length-1];

    for (let i=0; i<first.length; i++) {
        if (i < last.length && first[i] == last[i]) {
            result += first[i];
        } else {
            return result;
        }
    }

    return result;
};

let input = ["flower","flow","flight"];
//let input = ["dog","racecar","car"];
//let input = ["abc"];
//let input = ["flower","flower","flower","flower"];
let output = longestCommonPrefix(input);