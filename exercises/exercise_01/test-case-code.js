// Exercise 1: Advanced Object Creation and Property Manipulation
// Create `person`, then add a getFullName method that cannot be
// changed, deleted, or enumerated - without modifying the original literal.

const person = {
  firstName: "John",
  lastName: "Doe",
};

Object.defineProperty(person, "getFullName", {
  value: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  writable: false,
  configurable: false,
  enumerable: false,
});

// Testing
console.log(person.getFullName()); // John Doe

person.getFullName = function () {
  return "Modified";
}; // Does not change (non-writable)
delete person.getFullName; // Cannot delete (non-configurable)
console.log(person.getFullName()); // Still: John Doe

for (let key in person) {
  console.log(key); // firstName, lastName only (getFullName is non-enumerable)
}
