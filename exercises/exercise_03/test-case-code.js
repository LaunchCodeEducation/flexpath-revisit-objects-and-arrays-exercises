// Exercise 3: Deep Cloning an Object
// Recursively copy an object so nested objects/arrays are cloned too.

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Array) {
    const arrCopy = [];
    obj.forEach((item, index) => {
      arrCopy[index] = deepClone(item);
    });
    return arrCopy;
  }

  const objCopy = {};
  Object.keys(obj).forEach((key) => {
    objCopy[key] = deepClone(obj[key]);
  });
  return objCopy;
}

// Testing
const original = {
  name: "Alice",
  hobbies: ["reading", "gaming"],
  address: {
    city: "Wonderland",
  },
};

const clone = deepClone(original);

clone.name = "Bob";
clone.hobbies.push("chess");
clone.address.city = "Chessboard";

console.log(original);
// { name: 'Alice', hobbies: ['reading', 'gaming'], address: { city: 'Wonderland' } }
console.log(clone);
// { name: 'Bob', hobbies: ['reading', 'gaming', 'chess'], address: { city: 'Chessboard' } }
