class MatrixHelper {
    // Fills the matrix of size m (rows) by n (cos) with val
    static fill = (matrix, m, n, val) => {
        for (let i = 0; i<m; i++) {
            matrix[i] = [];
            for (let j=0; j<n; j++) {
                matrix[i][j] = val;
            }
        }
    };

    // https://stackoverflow.com/a/58668351/1398750
    static rotateClockWise = (matrix) => {
        return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());
    };

    // https://stackoverflow.com/questions/15170942/how-to-rotate-a-matrix-in-an-array-in-javascript#comment125372282_58668351
    static rotateCounterClockWise = (matrix) => {
        return matrix[0].map((val, index) => matrix.map(row => row[row.length-1-index]));
    };
    
    // Return a human-friendly string representation of a n x m matrix
    // Or you can use console.table(matrix) instead
    static toString = (matrix) => {
        return matrix.reduce((prev, curr) => prev + curr + '\r\n', '');
    };
}

module.exports = MatrixHelper;