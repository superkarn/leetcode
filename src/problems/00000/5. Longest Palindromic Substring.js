// https://leetcode.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let startTime = Date.now();
    console.log('--------------------------');
    console.log('--Parameters--------------');
    console.log(`s         :  ${s}`);

    // Pick the algorithm
    console.log('--Logs-------------------');
    let result = checkFromMiddle(s);
    
    let endTime = Date.now();
    console.log('--Stats-------------------');
    console.log('Memory    : ', process.memoryUsage().heapUsed);
    console.log('Total time: ', endTime - startTime);
    console.log('--------------------------');

    return result;
};

// attempt1: description on the algorithm
let bruteForce = (s) => {
    // special cases
    if (s.length <= 1) {
        return s;
    }

    let result = "";
    for (let i=0; i<s.length-1; i++) {
        for(let j=s.length; j>i; j--) {
            // if the string to check is not longer than the longest one so far, no need to check
            if (j-i <= result.length) {
                //console.log(`[${i} to ${j}] is not longer than ${result.length}, skipping`);
                break;
            }

            let temp = s.substring(i, j);
            //console.log(`[${i} to ${j}]: ${temp}`);
            if (isPalindrome(temp)) {
                if (temp.length > result.length) {
                    console.log(`found a longer palindrome: ${temp}`);
                    result = temp;
                }

                break;
            }
        }
    }

    return result;
};

// Check if a given string is a palindrome
let isPalindrome = (s) => {
    if (s.length <= 1) return true;
    
    //console.log(`    isPalindrome checking ${s[0]}, ${s[s.length-1]}`);
    if (s[0] == s[s.length-1]) {
        return isPalindrome(s.substring(1,s.length-1));
    }

    return false;
};

// attempt 2: check palindrome from the middle outward
// https://www.youtube.com/watch?v=XYQecbcd6_c
let checkFromMiddle = (s) => {
    let result = ""
    let resultLength = 0;

    for (let i=0; i<s.length; i++) {
        // check for odd length palindromes
        let l = i;
        let r = i;
        let tmp = expand(s, l, r, result, resultLength);
        if (tmp.resultLength > resultLength) {
            result = tmp.result;
            resultLength = tmp.resultLength;
        }

        // check for even length palindromes
        l = i;
        r = i+1;
        tmp = expand(s, l, r, result, resultLength);
        if (tmp.resultLength > resultLength) {
            result = tmp.result;
            resultLength = tmp.resultLength;
        }
    }

    return result;
};

let expand = (s, l, r, result, resultLength) => {
    let resultObject = { result, resultLength };

    // while the l,r pointers are withing the string
    // and we still have a palindrome
    while (0 <= l && r < s.length && s[l] == s[r]) {
        //console.log(`  checking ${l}, ${r}: ${s.substring(l,r+1)}`);

        let currentLength = r - l +1;
        if (currentLength > resultObject.resultLength) {
            resultObject.result = s.substring(l,r+1);
            resultObject.resultLength = currentLength;
            //console.log(`      new result: ${resultObject.result}`);
        }
        l -= 1;
        r += 1;
    }

    return resultObject;
};


let inputs = [
    { s:"babad", output:"bab" },
    { s:"cbbd", output:"bb" },
    { s:"civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth", 
        output:"ranynar" },
];

// Comparing scalar output
console.log(inputs.map(x => longestPalindrome(x.s) == x.output));