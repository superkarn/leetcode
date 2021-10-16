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
    let result = bruteForce(s);
    
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

let input = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
let output = longestPalindrome(input);
console.log(output);