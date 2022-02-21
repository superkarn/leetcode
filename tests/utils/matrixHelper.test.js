const MatrixHelper = require('../../src/utils/matrixHelper');

describe('MatrixHelper class', () => {

    test.each([
        {matrix:[], m:3, n:3, val:0},
        {matrix:[], m:3, n:4, val:-1},
        {matrix:[], m:4, n:3, val:null},
        {matrix:[], m:0, n:0, val:0},
    ])('MatrixHelper.fill()', ({matrix, m, n, val})  => {
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
    
    test.each([
        {matrix:[[1,2,3],[4,5,6],[7,8,9]], expected:[[7,4,1],[8,5,2],[9,6,3]]},
        {matrix:[[1,2,3],[4,5,6],[7,8,9],[10,11,12]], expected:[[10,7,4,1],[11,8,5,2],[12,9,6,3]]},
    ])('MatrixHelper.rotateClockWise()', ({matrix, expected})  => {
        // Arrange
        // See parameters
    
        // Act
        matrix = MatrixHelper.rotateClockWise(matrix);
    
        // Assert
        for (let row=0; row<expected.length; row++) {
            for(let col=0; col<expected[0].length; col++) {
                expect(matrix[row][col]).toBe(expected[row][col]);
            }
        }
    });
    
    test.each([
        {matrix:[[1,2,3],[4,5,6],[7,8,9]], expected:[[3,6,9],[2,5,8],[1,4,7]]},
        {matrix:[[1,2,3],[4,5,6],[7,8,9],[10,11,12]], expected:[[3,6,9,12],[2,5,8,11], [1,4,7,10]]},
    ])('MatrixHelper.rotateCounterClockWise()', ({matrix, expected})  => {
        // Arrange
        // See parameters
    
        // Act
        matrix = MatrixHelper.rotateCounterClockWise(matrix);
    
        // Assert
        for (let row=0; row<expected.length; row++) {
            for(let col=0; col<expected[0].length; col++) {
                expect(matrix[row][col]).toBe(expected[row][col]);
            }
        }
    });
});