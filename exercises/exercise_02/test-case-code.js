// Exercise 2: Prototypal Inheritance with Object.create
// Create `dog` with `animal` as its prototype, then override speak().

const animal = {
  speak: function () {
    return "Generic animal sound";
  },
};

const dog = Object.create(animal);

dog.speak = function () {
  return "Woof!";
};

// Testing
console.log(animal.speak()); // Generic animal sound
console.log(dog.speak()); // Woof!

// Inheritance check
console.log(Object.getPrototypeOf(dog) === animal); // true
