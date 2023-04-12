/* The Chicken class extends the MovableObject class and represents a chicken enemy that can move left
in a game. */
class Chicken extends MovableObject {
  speed = 0.2;
  y = 350;
  height = 80;
  width = 80;
  IMAGES_WALKING = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"
  ];

  constructor() {
    super().loadImages(this.IMAGES_WALKING);
    this.loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.x = 200 + Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.5;
    this.animate();
  }
}
