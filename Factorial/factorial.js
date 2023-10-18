// Factorial
// factorial of a non-negative integer is the product of all positive integers less than or equal to that  number.

// Using a while loop
function factorialLoop(n) {
  if (n >= 0) {
    let answer = 1;
    while (n > 1) {
      answer *= n;
      n -= 1;
    }
    return answer;
  }
}
console.log(factorialLoop(6));

// Using recursion
function factorialRecursion(n) {
  if (n <= 1) {
    return n;
  } else {
    return n * factorialRecursion(n - 1);
  }
}
console.log(factorialRecursion(6));
