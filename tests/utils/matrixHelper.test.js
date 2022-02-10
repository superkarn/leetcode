const MatrixHelper = require('../../src/utils/matrixHelper');
const each = require('jest-each').default;

describe('MatrixHelper class', () => {

    each([
        [[], 3, 3, 0],
        [[], 3, 4, -1],
        [[], 4, 3, null]
    ]).test('Filling a matrix with a default value', (matrix, m, n, val)  => {
        // Arrange
        // See parameters
    
        // Act
        MatrixHelper.fill(matrix, m, n, val);
    
        // Assert
        for (let row=0; row<m; row++) {
            for(let col=0; col<n; col++) {
                expect(matrix[row][col]).toBe(val);
            }
        }
    });
    
    test('Rotate a matrix clockwise', ()  => {
        // Arrange
        let matrix = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [10,11,12]
        ];
    
        let rotatedMatrix = [
            [10, 7, 4, 1],
            [11, 8, 5, 2],
            [12, 9, 6, 3]
        ]
    
        // Act
        matrix = MatrixHelper.rotateClockWise(matrix);
    
        // Assert
        for (let row=0; row<rotatedMatrix.length; row++) {
            for(let col=0; col<rotatedMatrix[0].length; col++) {
                expect(matrix[row][col]).toBe(rotatedMatrix[row][col]);
            }
        }
    });
    
    test('Rotate a matrix counter clockwise', ()  => {
        // Arrange
        let matrix = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [10,11,12]
        ];
    
        let rotatedMatrix = [
            [3, 6, 9, 12],
            [2, 5, 8, 11],
            [1, 4, 7, 10]
        ]
    
        // Act
        matrix = MatrixHelper.rotateCounterClockWise(matrix);
    
        // Assert
        for (let row=0; row<rotatedMatrix.length; row++) {
            for(let col=0; col<rotatedMatrix[0].length; col++) {
                expect(matrix[row][col]).toBe(rotatedMatrix[row][col]);
            }
        }
    });
});