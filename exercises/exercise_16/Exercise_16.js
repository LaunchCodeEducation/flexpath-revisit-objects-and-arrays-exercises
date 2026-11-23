// Exercise 16: Factory Function with a Shared Prototype

const userPrototype = {
  sayHello: function () {
    return `Hello, my name is ${this.name}`;
  },
};

function createUser(name) {
  const user = Object.create(userPrototype);
  user.name = name;
  return user;
}

// Testing
const user1 = createUser("Alice");
const user2 = createUser("Bob");

console.log(user1.sayHello()); // Hello, my name is Alice
console.log(user2.sayHello()); // Hello, my name is Bob

console.log(Object.getPrototypeOf(user1) === userPrototype); // true
console.log(Object.getPrototypeOf(user2) === userPrototype); // true
// Methods live once on the shared prototype - memory-efficient.
