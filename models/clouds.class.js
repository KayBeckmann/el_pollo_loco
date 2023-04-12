class Clouds extends MovableObject {
  speed = 0.15;

  constructor(img, x, y, width, height) {
    super().loadImage(img);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.animate();
  }

  animate() {
    this.moveLeft();
  }
}
