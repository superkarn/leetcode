// https://leetcode.com/problems/spiral-matrix/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`matrix    :  ${matrix}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = spiralTraversal(matrix);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);

    console.log('--Result------------------');
    console.log(result);
    console.log('--------------------------');

    return result;
};

// Take the first row, rotate the matrix counter clock wise, repeat.
// https://leetcode.com/problems/spiral-matrix/discuss/20571/1-liner-in-Python-%2B-Ruby
let matrixRotation = (matrix) => {
    //console.log(MatrixHelper.toString(matrix));
    let result = matrix.shift();

    if (matrix && matrix.length > 0) {
        matrix = MatrixHelper.rotateCounterClockWise(matrix);
        result.push(...matrixRotation(matrix));
    }
    
    return result;
};
class MatrixHelper {
    // Return a human-friendly string representation of a n x m matrix
    static toString = (matrix) => {
        return matrix.reduce((prev, curr) => prev + curr + '\r\n', '');
    };

    // https://stackoverflow.com/a/58668351/1398750
    static rotateClockWise = (matrix) => {
        return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());
    };

    // https://stackoverflow.com/questions/15170942/how-to-rotate-a-matrix-in-an-array-in-javascript#comment125372282_58668351
    static rotateCounterClockWise = (matrix) => {
        return matrix[0].map((val, index) => matrix.map(row => row[row.length-1-index]));
    };
}

let spiralTraversal = (matrix) => {
    // Special cases

    let result = [];

    // Right: [0,1]
    // Down: [1,0]
    // Left: [0,-1]
    // Up: [-1,0]
    let directions = [[0,1], [1,0], [0,-1], [-1,0]];

    // Direction increment % 4
    let i_dir = 0;

    // Horizontal position
    let x = -1;

    // Vertical position
    let y = 0;

    let horizontalRange = matrix[0].length;
    let verticalRange = matrix.length-1;

    //console.log(`${MatrixHelper.toString(matrix)}`);
  
    while ((i_dir%2==0 ? horizontalRange : verticalRange)>0) {
        let currentDirection = directions[i_dir];
        
        //console.log(`position:   [${y},${x}]`);
        //console.log(`i_dir:      ${i_dir}, [${currentDirection}]`);
        //console.log(`horizontal: ${horizontalRange}`);
        //console.log(`vertical:   ${verticalRange}`);


        for (let i=0; i < (i_dir%2==0 ? horizontalRange : verticalRange); i++) {
            y += directions[i_dir][0];
            x += directions[i_dir][1];
            //console.log(`  [${y},${x}] = ${matrix[y][x]}`);
            result.push(matrix[y][x]);
        }
        

        // If direction is horizontal, then decrease horizontalRange
        if (i_dir % 2 == 0) {
            horizontalRange--;
        } 
        // Else direction is vertical, decrease verticalRange
        else {
            verticalRange--;
        }

        // Change direction
        i_dir = (i_dir + 1) % 4;

        //console.log(``);
    }

    return result;
};

let inputs = [
    { matrix:[[1,2,3],[4,5,6],[7,8,9]], output:[1,2,3,6,9,8,7,4,5] },
    { matrix:[[1,2,3,4],[5,6,7,8],[9,10,11,12]], output:[1,2,3,4,8,12,11,10,9,5,6,7] },
];


// Comparing array output
console.log(inputs.map(x => spiralOrder(x.matrix).every((v,i) => v === x.output[i])));