function merge(left, right, lt) {
  // Assumes left and right are sorted lists. lt defines an ordering on the elements of the array. Returns a new sorted list containing the same elements as (left + right) would contain
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (lt(left[i], right[j])) {
      result.push(left[i]);
      i += 1;
    } else {
      result.push(right[j]);
      j += 1;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i += 1;
  }
  while (j < right.length) {
    result.push(right[j]);
    j += 1;
  }
  return result;
}

const lambda = (x, y) => x < y;

function sort(arr, lt = lambda) {
  // Returns a new sorted list containing the same elements as arr
  if (arr.length < 2) {
    return [...arr];
  } else {
    let middle = parseInt(arr.length / 2);
    let left = sort(arr.slice(0, middle));
    let right = sort(arr.slice(middle));
    return merge(left, right, lt);
  }
}
// const arrNum = [35, 4, 5, 29, 17, 58, 0];
// const newArrNum = sort(arrNum);
// console.log(newArrNum);

// const arrFloat = [1.0, 2.25, 24.5, 12.0, 2.0, 23.0, 19.125, 1.0];
// const newArrFloat = sort(arrFloat);
// console.log(newArrFloat);

function firstNameLastName(name1, name2) {
  name1 = name1.split(" ");
  name2 = name2.split(" ");
  if (name1[0] != name2[0]) {
    return name1[0] < name2[0];
  } else {
    return name1[1] < name2[1];
  }
}

const arr = [
  "John Guttag",
  "Tom Brady",
  "Chancellor Grimson",
  "Gisele Brady",
  "Big Julie",
];
const newArr = sort(arr, firstNameLastName);
console.log("Sorted list =", newArr);
