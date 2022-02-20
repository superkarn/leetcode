class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    };

    toString = () => {
        let str = `${this.val}`;
        let n = this.next;

        if (n) {
            while (n.next) {
                str += `, ${n.val}`;
                n = n.next;
            }

            // The last node            
            str += `, ${n.val}`;
        }
        return str;
    }
}

module.exports = ListNode;