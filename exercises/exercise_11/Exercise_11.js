// Exercise 11: Getters and Setters with Validation
// A counter whose value can increase but never decrease.

const counter = {
  _count: 0,
};

Object.defineProperty(counter, "count", {
  get() {
    return this._count;
  },
  set(value) {
    if (value >= this._count) {
      this._count = value;
    } else {
      throw new Error("Cannot decrease count");
    }
  },
});

// Testing
counter.count = 5;
console.log(counter.count); // 5

counter.count = 10;
console.log(counter.count); // 10

try {
  counter.count = 8; // Throws - lower than the current value
} catch (e) {
  console.error(e.message); // Cannot decrease count
}
