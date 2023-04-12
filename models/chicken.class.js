/* The Chicken class extends the MovableObject class and represents a chicken enemy that can move left
in a game. */
class Chicken extends MovableObject {
  y = 350;
  height = 80;
  width = 80;
  IMAGES_WALKING = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"
  ];
  currentImage = 0;

  constructor() {
    super().loadImages(this.IMAGES_WALKING);
    this.loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.x = 200 + Math.random() * 500;
    this.animate();
  }

  moveLeft() {}
}
