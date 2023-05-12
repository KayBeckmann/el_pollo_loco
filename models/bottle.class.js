class Bottle extends MovableObject {
  height = 80;
  width = 80;
  y = 352;
  offset = {
    top: 10,
    bottom: 0,
    left: 20,
    right: 10,
  };
  images_bottle_ground = ["img/6_salsa_bottle/1_salsa_bottle_on_ground.png"];

  constructor() {
    super().loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    this.y + Math.floor() * 500;
    this.x = 500 + Math.random() * 1900;
    this.loadImages(this.images_bottle_ground);
    this.animate();
  }

  /**
   * The function animates a bottle image and checks if the bottle has been collected.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.images_bottle_ground);
    }, 400);

    setInterval(() => {
      if (this.collectBottle()) {
        loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
      }
    }, 50);
  }
}
