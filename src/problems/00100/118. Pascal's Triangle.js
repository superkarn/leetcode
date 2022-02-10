// https://leetcode.com/problems/pascals-triangle/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`numRows   :  ${numRows}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(numRows);
    
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
let bruteForce = (numRows) => {
    let result = [[1]];

    for (let i=1; i<numRows; i++) {
        //console.log(`  i: ${i}`);

        // First number of each row is always 1
        let row = [1];
        
        // Last number of each row is always 1
        row[i] = 1;

        // Calculate the numbers in between
        for (let j=1; j<i; j++) {
            //console.log(`    j: ${j} <- [${i-1}][${j-1}] + [${i-1}][${j}]`);
            row[j] = result[i-1][j-1] + result[i-1][j];
        }
        
        result.push(row);
    };

    //console.table(result);
    return result;
};

let inputs = [
    { numRows:1, output:[[1]] },
    { numRows:2, output:[[1],[1,1]]  },
    { numRows:3, output:[[1],[1,1],[1,2,1]] },
    { numRows:4, output:[[1],[1,1],[1,2,1],[1,3,3,1]] },
    { numRows:5, output:[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] },
];

// Comparing 2D array output
console.log(inputs.map(x => {
    let results = generate(x.numRows)
    if (x.output.length != results.length) return false;

    return results.every((v,i) => {
        if (v.length != x.output[i].length) return false;
        return v.every((v2,i2) => v2 === x.output[i][i2])
    });
}));
