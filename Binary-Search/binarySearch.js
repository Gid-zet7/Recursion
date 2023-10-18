// Binary search is a searching technique which works on the Divide and Conquer approach. It is used to search for any element in a sorted array. Binary search (O(logN)) is much faster relative to linear search (O(N))

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 60, 70, 80, 90, 98, 100, 110, 120, 130,
  140, 150, 160, 170, 180, 190, 200,
];
const element = 201;

// --------USING A FOR LOOP-----------

function linear_search(arr, e) {
  let numGuesses = 0; // reveals the the number of guesses it took to find the element or to not find it
  for (let i of arr) {
    numGuesses += 1;
    console.log(numGuesses);
    if (i === e) {
      console.log("Element Found");
      return;
    }
  }
}

linear_search(arr, element);

// --------------USING RECURSION---------------

// arr represents the array of items
// e represents the element to  search for
// low represents the lower bound
// high represents the upper bound

let numCalls = 0; // reveals the number of times the function was called until the element was found or not found
function binary_search(arr, e, low, high) {
  numCalls += 1;
  console.log(numCalls);
  if (high - low < 2) {
    return arr[low] == e || arr[high] == e;
  }
  mid = low + parseInt((high - low) / 2);
  if (arr[mid] == e) {
    return true;
  }
  if (arr[mid] > e) {
    return binary_search(arr, e, low, mid - 1);
  } else {
    return binary_search(arr, e, mid + 1, high);
  }
  // Big O(log(len(L)))
}

function search(arr, e) {
  return binary_search(arr, e, 0, arr.length - 1);
}

search(arr, element)
  ? console.log("Element Found")
  : console.log("Element Not found");
