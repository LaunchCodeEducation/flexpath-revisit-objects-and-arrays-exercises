// Exercise 15: writable: false / configurable: false on an Array Property
// The binding can't be reassigned or deleted - but the array's
// contents can still be modified.

const data = {};

Object.defineProperty(data, "items", {
  value: [],
  writable: false,
  configurable: false,
  enumerable: true,
});

data.items = [1, 2, 3]; // Fails silently (or throws in strict mode)

data.items.push(1);
data.items.push(2);

console.log(data.items); // [1, 2]

delete data.items; // Fails silently (non-configurable)

console.log(data.items); // Still [1, 2]
