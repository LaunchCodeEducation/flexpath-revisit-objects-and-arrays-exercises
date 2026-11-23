// Exercise 12: Stack vs. Heap, and a Memory Leak Example
//
// Stack: static memory for primitive values and function-call
//        execution contexts - fast, automatically managed.
// Heap:  dynamic memory for objects, arrays, and functions -
//        references to heap values are what variables on the stack hold.

// Memory leak example: a closure keeps a large array alive
function createLeak() {
  const largeArray = new Array(1000000).fill("*");
  return function () {
    console.log(largeArray.length);
  };
}

let leakyFunction = createLeak();
// leakyFunction holds a reference to largeArray through the closure,
// so largeArray stays in memory even though createLeak has finished.

// To prevent the leak, release the reference when done:
leakyFunction = null;
// Now largeArray can be garbage collected.
