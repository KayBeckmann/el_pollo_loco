class MovableObject {
  x = 120;
  y = 200;
  width = 100;
  height = 200;
  img;

  constructor() {}

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {
    console.log("moving Right");
  }

  moveLeft() {
    console.log("moving Left");
  }
}
