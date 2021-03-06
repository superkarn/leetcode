const ListNode = require('../../src/models/ListNode');
const LinkedListHelper = require('../../src/utils/linkedListHelper');

describe('LinkedListHelper class', () => {
    
    test.each([
        {head:[], expected:null},
        {head:[1], expected:new ListNode(1, null)},
        {head:[1,2], expected:new ListNode(1, new ListNode(2, null))},
        {head:[1,2,3], expected:new ListNode(1, new ListNode(2,  new ListNode(3, null)))},
    ])('LinkedListHelper.fromArray()', ({head, expected})  => {
        // Arrange
    
        // Act
        let result = LinkedListHelper.fromArray(head);
    
        // Assert
        expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
    });

    test.each([
        {head:new ListNode(1, null), n:0, expected:null},
        {head:new ListNode(1, new ListNode(2, null)), n:0, expected:new ListNode(2, null)},
        {head:new ListNode(1, new ListNode(2,  new ListNode(3, null))), n:0, expected:new ListNode(2, new ListNode(3,  null))},
        {head:new ListNode(1, new ListNode(2,  new ListNode(3, null))), n:1, expected:new ListNode(1, new ListNode(3,  null))},
        {head:new ListNode(1, new ListNode(2,  new ListNode(3, new ListNode(4, null)))), n:3, expected:new ListNode(1, new ListNode(2,  new ListNode(3,  null)))},
    ])('LinkedListHelper.removeNthNode()', ({head, n, expected})  => {
        // Arrange
    
        // Act
        let result = LinkedListHelper.removeNthNode(head, n);
    
        // Assert
        expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
    });

    test.each([
        {head:new ListNode(1, null), n:1, expected:null},
        {head:new ListNode(1, new ListNode(2, null)), n:1, expected:new ListNode(1, null)},
        {head:new ListNode(1, new ListNode(2,  new ListNode(3, null))), n:1, expected:new ListNode(1, new ListNode(2,  null))},
        {head:new ListNode(1, new ListNode(2,  new ListNode(3, null))), n:2, expected:new ListNode(1, new ListNode(3,  null))},
        {head:new ListNode(1, new ListNode(2,  new ListNode(3, new ListNode(4, null)))), n:4, expected:new ListNode(2, new ListNode(3,  new ListNode(4,  null)))},
    ])('LinkedListHelper.removeNthNodeFromEnd()', ({head, n, expected})  => {
        // Arrange
    
        // Act
        let result = LinkedListHelper.removeNthNodeFromEnd(head, n);
    
        // Assert
        expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
    });

    test.each([
        {head:null, expected:null},
        {head:new ListNode(1, null), expected:new ListNode(1, null)},
        {head:new ListNode(1, new ListNode(2, null)), expected:new ListNode(2, new ListNode(1, null))},
        {head:new ListNode(1, new ListNode(2,  new ListNode(3, null))), expected:new ListNode(3, new ListNode(2,  new ListNode(1, null)))},
    ])('LinkedListHelper.reverse()', ({head, expected})  => {
        // Arrange
    
        // Act
        let result = LinkedListHelper.reverse(head);
    
        // Assert
        expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
    });

    test.each([
        {head:null, expected:[]},
        {head:new ListNode(1, null), expected:[1]},
        {head:new ListNode(1, new ListNode(2, null)), expected:[1,2]},
        {head:new ListNode(1, new ListNode(2,  new ListNode(3, null))), expected:[1,2,3]},
    ])('LinkedListHelper.toArray()', ({head, expected})  => {
        // Arrange
    
        // Act
        let result = LinkedListHelper.toArray(head);
    
        // Assert
        expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
    });
    
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