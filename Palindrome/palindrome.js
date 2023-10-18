// A palindrome is a word or a sentence that reads the same backward or forward

function toChars(str) {
  let word = str.toLowerCase();
  let ans = "";
  for (let chars of word) {
    if (chars === chars.toLowerCase()) {
      ans = ans + chars;
    }
  }
  return ans;
}

// Using the for loops to solve palindome
function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      console.log("Not palindrome");
      return;
    }
  }

  console.log("Palindrome");
  return;
}

// isPal("Civic");
// isPal("Madam");
// isPal("Dennis sinned");
// isPal("Able was I ere I saw Elba");

// Using recursion
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  } else {
    return str[0] === str.slice(-1) && isPalindrome(str.slice(1, -1));
  }
}

function isPal(str) {
  // return True if s is palindrome and False otherwise
  return isPalindrome(toChars(str));
}

// console.log(isPal("Civic"));
// console.log(isPal("Madam"));
// console.log(isPal("Dennis sinned"));
// console.log(isPal("Able was I ere I saw Elba"));
