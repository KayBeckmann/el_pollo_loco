class MovableObject {
  x = 120;
  y = 230;
  y_Ground = 230;
  y_Speed = 0;
  acceleration = 1;
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

  drawRectangle(ctx) {
    ctx.beginPath();
    ctx.lineWidth = `2`;
    ctx.strokeStyle = `blue`;
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  }

  animate() {
    setInterval(() => {
      let path = this.IMAGES_WALKING[this.currentImage];
      this.img.src = path;
      this.currentImage = (this.currentImage + 1) % this.IMAGES_WALKING.length;
    }, 150);
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }

  jump() {
    this.y_Speed = 20;
  }

  moveRight() {
    this.x = this.x + this.speed;
  }

  moveLeft() {
    this.x = this.x - this.speed;
  }

  isAboveGround() {
    return this.y <= this.y_Ground;
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.y_Speed >= 0) {
        this.y -= this.y_Speed;
        this.y_Speed -= this.acceleration;
      } else {
        this.y_Speed = 0;
      }
    }, 1000 / 25);
  }
}
