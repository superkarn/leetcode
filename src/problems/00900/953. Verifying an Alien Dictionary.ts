// https://leetcode.com/problems/verifying-an-alien-dictionary/description/
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
function isAlienSorted(words: string[], order: string): boolean {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`words      :  ${words}`);
    console.log(`order      :  ${order}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = bruteForce(words, order);
    
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
function bruteForce(words: string[], order: string): boolean {
    let result = true;
    for (let ii = 0; ii < words.length-1; ii++) {
        result = compareWord(words[ii], words[ii+1], order);

        if (!result) return result;
    }

    return result;
};

// returns true if w1 comes before w2
function compareWord(w1:string, w2:string, order: string): boolean {
    // special case
    if (w1 == w2) return true;

    var result = 0;

    for (let ii = 0; ii < w1.length && ii < w2.length && !result; ii++) {
        //console.log(`${ii}, ${w1.length}, ${w2.length}`)
        result = compareLetter(w1[ii], w2[ii], order);

        if (result < 0) return true;
        if (result > 0) return false;
    }

    return w1.length < w2.length;
}

// returns true if l1 comes before l2
function compareLetter(l1:string, l2:string, order: string): number {
    // special case
    if (l1 == l2) return 0;

    let result = order.indexOf(l1) - order.indexOf(l2);

    //console.log(`  ${l1}(${order.indexOf(l1)}) - ${l2}(${order.indexOf(l2)}) = ${order.indexOf(l1) - order.indexOf(l2)} (${result < 0})`);
    return result
}

let inputs = [
    //{ words:["hello","hellp","hellq"], order:"hlabcdefgijkmnopqrstuvwxyz", output:true },
    { words:["hello","leetcode"], order:"hlabcdefgijkmnopqrstuvwxyz", output:true },
    { words:["word","world","row"], order:"worldabcefghijkmnpqstuvxyz", output:false },
    { words:["apple","app"], order:"abcdefghijklmnopqrstuvwxyz", output:false },
    { words:["hello","hello"], order:"abcdefghijklmnopqrstuvwxyz", output:true },
];

// Comparing scalar output
console.log(inputs.map(x => isAlienSorted(x.words, x.order) == x.output));
