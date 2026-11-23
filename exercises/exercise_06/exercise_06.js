// Exercise 6: splice vs slice
// splice mutates the original array; slice returns a new array.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1. Remove elements from index 2 to 4 (inclusive)
numbers.splice(2, 3); // removes 3 elements starting at index 2
// numbers is now [1, 2, 6, 7, 8, 9]

// 2. New array containing elements from index 5 to the end
const newArray = numbers.slice(5);
// newArray is [9]

// 3. Insert the number 10 at index 3
numbers.splice(3, 0, 10); // delete count 0 = insert only
// numbers is now [1, 2, 6, 10, 7, 8, 9]

console.log(numbers); // [1, 2, 6, 10, 7, 8, 9]
console.log(newArray); // [9]
