class Coins extends MovableObject {
  height = 120;
  y = 115;
  offset = {
    top: 40,
    bottom: 40,
    left: 30,
    right: 30,
  };

  images_coin = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];

  constructor() {
    super().loadImage("img/8_coin/coin_1.png");
    this.y + Math.floor() * 500;
    this.x = 300 + Math.random() * 1900;
    this.loadImages(this.images_coin);
    this.animate();
  }

  /**
   * This function repeatedly plays an animation of coin images at a set interval.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.images_coin);
    }, 200);
  }
}
