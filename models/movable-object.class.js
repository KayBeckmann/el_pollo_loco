class MovableObject {
  x = 120;
  y = 230;
  width = 100;
  height = 200;
  img;
  imageCache = [];
  currentImage = 0;
  otherDirection = false;

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

  animate() {
    setInterval(() => {
      let path = this.IMAGES_WALKING[this.currentImage];
      this.img.src = path;
      this.currentImage = (this.currentImage + 1) % this.IMAGES_WALKING.length;
    }, 150);
    this.moveLeft();
  }

  moveRight() {
    console.log("moving Right");
  }

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}
