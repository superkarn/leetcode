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
    const ALPHABETS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let result = 0;

    for (let i=columnTitle.length-1; i>=0; i--) {
        let val = ALPHABETS.indexOf(columnTitle[i]);

        if (val == -1) {
            throw `${columnTitle[i]} at ${i} is not a valid character`;
        }
        
        result += (val+1) * Math.pow(ALPHABETS.length,columnTitle.length-1-i);
    }

    return result;
};

let inputs = [
    { columnTitle:"A", output:1 },
    { columnTitle:"Y", output:25 },
    { columnTitle:"Z", output:26 },
    { columnTitle:"AB", output:28 },
    { columnTitle:"ZY", output:701 },
];

// Comparing scalar output
console.log(inputs.map(x => titleToNumber(x.columnTitle) == x.output));
