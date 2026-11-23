// Exercise 14: Prototype Inheritance - Shape and Rectangle

function Shape() {}

Shape.prototype.area = function () {
  return 0;
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

// Inherit from Shape, then restore the constructor pointer
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

// Override area
Rectangle.prototype.area = function () {
  return this.width * this.height;
};

// Testing
const shape = new Shape();
console.log(shape.area()); // 0

const rectangle = new Rectangle(5, 10);
console.log(rectangle.area()); // 50

console.log(rectangle instanceof Rectangle); // true
console.log(rectangle instanceof Shape); // true
