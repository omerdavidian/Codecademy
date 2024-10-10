/*
Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a built-in array method called .reverse() that does a lot of this work for you, but you’re NOT allowed to use it here!
*/

// Write your code here:
const reverseArray = (array) => {
  let reversed = [];
  console.log(array.length);
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
};

// When you're ready to test your code, uncomment the below and run:

const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];
