class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate area
  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side); // Call Rectangle's constructor with equal width and height
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
