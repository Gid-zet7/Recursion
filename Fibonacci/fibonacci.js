// Fibonacci sequence is a simple numerical serires where each number is the sum of two preceeding numbers, starting from o and 1.

function fibonacci(num) {
  if (Number.isInteger(num) && num >= 0) {
    if (num == 0 || num == 1) {
      return 1;
    } else {
      return fibonacci(num - 1) + fibonacci(num - 2);
    }
  }
}

function testFibonacci(num) {
  for (let i = 0; i <= num; i++) {
    console.log(`fib of ${i} = ${fibonacci(i)}`);
  }
}

testFibonacci(10);
