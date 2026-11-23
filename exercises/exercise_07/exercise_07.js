// Exercise 7: Combining Arrays with the Spread Operator

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combined = [...array1, ...array2];
// combined is [1, 2, 3, 4, 5, 6]

// Clone combined (shallow copy is enough for primitive values)
const clone = [...combined];

// Modifying the clone does not affect the original
clone.push(7);

console.log(combined); // [1, 2, 3, 4, 5, 6]
console.log(clone); // [1, 2, 3, 4, 5, 6, 7]
