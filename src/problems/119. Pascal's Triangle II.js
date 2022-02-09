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
    let result = formula(rowIndex);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result);
    console.log('--------------------------');

    return result;
};

// https://www.geeksforgeeks.org/find-the-nth-row-in-pascals-triangle
// Using formula: NCr = ((NCr - 1) * (N - r + 1)) / r
let formula = (rowIndex) => {
    let result = [1];

    for (let i=1; i<=rowIndex; i++) {
        let val = (result[i-1] * (rowIndex - i + 1)) / i;
        result.push(val);
    }

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
