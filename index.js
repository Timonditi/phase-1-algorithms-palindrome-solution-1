function isPalindrome(str) {
  
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  
  return true;
}

console.assert(isPalindrome('abba') === true, 'Expected isPalindrome("abba") to be true');

/* 
Add your pseudocode here
reverse the input string
if the reversed string is the same as the input
  return true
else
  return false
  
*/

/*
  Add written explanation of your solution here
// Compare the first and last characters of the string,
// then move inward until the whole string has been checked
// If we've made it through the loop without returning false,
// the string is a palindrome
// Test case
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
