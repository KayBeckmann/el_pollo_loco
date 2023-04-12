class Clouds extends MovableObject {
  constructor(img, x, y, width, height) {
    super().loadImage(img);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.x -= 0.15;
    }, 1000 / 60);
  }
}
