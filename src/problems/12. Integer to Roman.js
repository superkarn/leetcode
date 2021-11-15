// https://leetcode.com/problems/integer-to-roman/
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`num    :  ${num}`);

    // Pick the algorithm
    console.log('--Logs--------------------');
    let result = attemp2Map(num);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);
    console.log('--------------------------');

    return result;
};

const ROMAN_TENS = ['I', 'X', 'C', 'M'];
const ROMAN_FIVES = ['V', 'L', 'D'];

// attempt1: description on the algorithm
let attempt1 = (num) => {
    // if the input is out of range (1 <= num <= 3999), return ''
    if (num < 1 || 3999 < num) {
        return '';
    }

    let result = '';
    let ithPower = 3;

    while (ithPower >=0) {
        if (num >= Math.pow(10,ithPower)) {
            result += calculateTens(num, ithPower);
            num = num % Math.pow(10,ithPower);
        }
        ithPower--;
    }

    return result;
};

let calculateTens = (num, ithPower) => {

    let result = '';
    let letter = ROMAN_TENS[ithPower];
    //console.log(`  calculateTens(${num}, ${ithPower}, ${letter})`);
    if (num >= Math.pow(10,ithPower)) {
        let tmpNum = Math.floor(num / (Math.pow(10,ithPower)));

        // 9
        if (tmpNum == 9) {
            return `${ROMAN_TENS[ithPower]}${ROMAN_TENS[ithPower+1]}`;
        } 
        
        // 4
        if (tmpNum == 4) {
            return `${ROMAN_TENS[ithPower]}${ROMAN_FIVES[ithPower]}`;
        }

        // >= 5
        if (tmpNum >= 5) {
            tmpNum -= 5;
            result += ROMAN_FIVES[ithPower];
        }

        // everything else
        for (let i=0; i<tmpNum; i++) {
            result += ROMAN_TENS[ithPower];
        }
    }

    return result;
};

// https://leetcode.com/problems/integer-to-roman/discuss/6274/Simple-Solution
let attemp2Map = (num) => {
    const M = ['', 'M', 'MM', 'MMM'];
    const C = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',];
    const X = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',];
    const I = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX',];
    return M[Math.floor(num/1000)] 
        + C[Math.floor((num%1000)/100)] 
        + X[Math.floor((num%100)/10)] 
        + I[Math.floor(num%10)];
};

let input = 3994;
let output = intToRoman(input);
console.log(output);