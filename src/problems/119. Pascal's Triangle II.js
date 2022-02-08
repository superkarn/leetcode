// https://leetcode.com/problems/pascals-triangle-ii/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`rowIndex   :  ${rowIndex}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(rowIndex);
    
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
let bruteForce = (rowIndex) => {
    let result = [1];
    return result;
};

let inputs = [
    { rowIndex:0, output:[1] },
    { rowIndex:1, output:[1,1]  },
    { rowIndex:2, output:[1,2,1] },
    { rowIndex:3, output:[1,3,3,1] },
    { rowIndex:4, output:[1,4,6,4,1] },
];

// Comparing array/object output
console.log(inputs.map(x => JSON.stringify(getRow(x.rowIndex)) === JSON.stringify(x.output)));
