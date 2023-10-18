// The Tower of Hanoi algorithm is a method to solve a mathematical game involving three rods and a number of disks of different sizes. This algorithm is a brilliant example of recursion in use

// n is the number of disks
// f is the first rod
// t is the target rod
// s is the spare rod

function hanoi(n, f, t, s) {
  if (n == 1) {
    console.log(`move from ${f} to ${t}`);
    return `move from ${f} to ${t}`;
  } else {
    hanoi(n - 1, f, s, t);
    hanoi(1, f, t, s);
    hanoi(n - 1, s, t, f);
  }
}

hanoi(2, "f", "t", "s");

// The algorithm aims to move all of the disks from the first rod to the target rod, obeying specific rules
