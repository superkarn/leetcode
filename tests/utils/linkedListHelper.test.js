const ListNode = require('../../src/models/ListNode');
const LinkedListHelper = require('../../src/utils/linkedListHelper');

describe('LinkedListHelper class', () => {

    
    test.each([
        {head:[], expected:""},
        {head:[1], expected:"1,"},
        {head:[1,2], expected:"1,2,"},
        {head:[1,2,3], expected:"1,2,3,"},
    ])('LinkedListHelper.toString()', ({head, expected})  => {
        // Arrange
        let headList = LinkedListHelper.fromArray(head);
    
        // Act
        let result = LinkedListHelper.toString(headList);
    
        // Assert
        expect(result).toBe(expected);
    });
});