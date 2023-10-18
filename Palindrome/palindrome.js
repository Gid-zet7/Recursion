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

function isPlaindrome(str) {
  if (str.length <= 1) {
    return true;
  } else {
    return str[0] === str.slice(-1) && isPlaindrome(str.slice(1, -1));
  }
}

function isPal(str) {
  // return True if s is palindrome and False otherwise
  return isPlaindrome(toChars(str));
}

console.log(isPal("Civic"));
console.log(isPal("Madam"));
console.log(isPal("Dennis sinned"));
console.log(isPal("Able was I ere I saw Elba"));
