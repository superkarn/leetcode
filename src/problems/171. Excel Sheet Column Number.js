// https://leetcode.com/problems/excel-sheet-column-number/
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`columnTitle    :  ${columnTitle}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(columnTitle);
    
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
let bruteForce = (columnTitle) => {
    let result = columnTitle;

    return result;
};

let inputs = [
    { columnTitle:"A", output:1 },
    { columnTitle:"AB", output:28 },
    { columnTitle:"zy", output:701 },
];

// Comparing scalar output
console.log(inputs.map(x => titleToNumber(x.columnTitle) == x.output));
