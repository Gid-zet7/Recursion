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
function isPalindromeLoop(str) {
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

function isPalLoop(str) {
  // return True if s is palindrome and False otherwise
  return isPalindromeLoop(toChars(str));
}

isPalLoop("Civic");
isPalLoop("Madam");
isPalLoop("Dennis sinned");
isPalLoop("Able was I ere I saw Elba");

// Using recursion
function isPalindromeRecursion(str) {
  if (str.length <= 1) {
    return true;
  } else {
    return str[0] === str.slice(-1) && isPalindromeRecursion(str.slice(1, -1));
  }
}

function isPalRecursion(str) {
  // return True if s is palindrome and False otherwise
  return isPalindromeRecursion(toChars(str));
}

console.log(isPalRecursion("Civic"));
console.log(isPalRecursion("Madam"));
console.log(isPalRecursion("Dennis sinned"));
console.log(isPalRecursion("Able was I ere I saw Elba"));
