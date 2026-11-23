// Exercise 5: Constructor Functions and Prototypes (explain.js)
// Person constructor with greet defined on the prototype.

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

const alice = new Person("Alice");

console.log(alice.greet());
// "Hello, my name is Alice" - greet is reached through the prototype chain

console.log(alice.hasOwnProperty("greet"));
// false - greet is not a direct property of alice; it lives on the prototype

console.log(Object.getPrototypeOf(alice) === Person.prototype);
// true - the prototype of alice is Person.prototype

console.log(Person.prototype.constructor === Person);
// true - Person.prototype's constructor points back to Person
