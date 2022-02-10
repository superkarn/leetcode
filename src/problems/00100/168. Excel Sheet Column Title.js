// https://leetcode.com/problems/excel-sheet-column-title/
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`columnNumber:  ${columnNumber}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(columnNumber);
    
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
let bruteForce = (columnNumber) => {
    const ALPHABETS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let result = [];

    while (columnNumber > 0) {
        result.push(ALPHABETS[(columnNumber-1) % ALPHABETS.length]);
        columnNumber = Math.floor((columnNumber - 1)/ALPHABETS.length);
    }

    return result.reverse().join('');
};

let inputs = [
    { columnNumber:1, output:'A' },
    { columnNumber:25, output:'Y' },
    { columnNumber:26, output:'Z' },
    { columnNumber:27, output:'AA' },
    { columnNumber:28, output:'AB' },
    { columnNumber:701, output:'ZY' },
];

// Comparing scalar output
console.log(inputs.map(x => convertToTitle(x.columnNumber) == x.output));