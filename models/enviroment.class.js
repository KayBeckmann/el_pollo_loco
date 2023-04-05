class Enviroment extends MovableObject {
  constructor(img, x, y, width, height) {
    super().loadImage(img);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}
