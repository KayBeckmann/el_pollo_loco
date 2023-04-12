class MovableObject {
  x = 120;
  y = 230;
  width = 100;
  height = 200;
  img;
  imageCache = [];

  constructor() {}

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(array) {
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache.push(img);
    });
  }

  moveRight() {
    console.log("moving Right");
  }

  moveLeft() {
    console.log("moving Left");
  }
}
