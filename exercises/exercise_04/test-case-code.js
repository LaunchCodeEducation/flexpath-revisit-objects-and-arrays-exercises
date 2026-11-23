// Exercise 4: Extending Array.prototype
// Add a non-enumerable `last` method to Array.prototype.

Object.defineProperty(Array.prototype, "last", {
  value: function () {
    return this[this.length - 1];
  },
  writable: true,
  configurable: true,
  enumerable: false, // keeps it out of for...in loops over arrays
});

// Testing
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.last()); // 5

for (let key in numbers) {
  console.log(key); // 0, 1, 2, 3, 4 (does not include 'last')
}
