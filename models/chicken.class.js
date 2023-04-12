/* The Chicken class extends the MovableObject class and represents a chicken enemy that can move left
in a game. */
class Chicken extends MovableObject {
  y = 350;
  height = 80;
  width = 80;
  /**
   * The constructor function loads an image and sets the x position of a chicken enemy object randomly
   * within a range.
   */
  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.x = 200 + Math.random() * 500;
  }
  moveLeft() {}
}
