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