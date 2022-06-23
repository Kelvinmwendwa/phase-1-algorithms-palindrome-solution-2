

  function isPalindrome(word) {
   for (let firstIndex = 0; firstIndex < word.length / 2; firstIndex++) {
     const lastIndex = word.length - 1 - firstIndex;
     if (word[firstIndex] !== word[lastIndex]) {
       return false;
     }
   }
 
   return true;
 }
/* 
 Add your pseudocode here
*/
      //  iterate from the beginning of the string to the middle of the string. Iterating from the start of the string upto its middle point
        // We're comparing the first letter to the last letter, the second letter to the second to last letter, and so on. For example, in "racecar", compare starting r with the last r.
        //if the letters don't match, return false, a

       //if the letters match, return true.


/*
 Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
 // add your own custom tests in here
 console.log("Expecting: true");
 console.log("=>", isPalindrome("racecar"));

 console.log("");

 console.log("Expecting: false");
 console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;