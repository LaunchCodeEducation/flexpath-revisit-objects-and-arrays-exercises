// Exercise 8: Shallow vs. Deep Copying of Arrays

const originalArray = [{ a: 1 }, { b: 2 }, { c: 3 }];

// Shallow copy - new array, but the objects inside are still shared
const shallowCopy = [...originalArray];

// Deep copy - each object is copied too
const deepCopy = originalArray.map((obj) => ({ ...obj }));

// Modifying through the shallow copy DOES affect the original
shallowCopy[0].a = 10;

// Modifying through the deep copy does NOT affect the original
deepCopy[1].b = 20;

console.log(originalArray); // [{ a: 10 }, { b: 2 }, { c: 3 }]
console.log(shallowCopy); //   [{ a: 10 }, { b: 2 }, { c: 3 }]
console.log(deepCopy); //      [{ a: 1 }, { b: 20 }, { c: 3 }]
