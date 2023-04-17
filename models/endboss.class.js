class Endboss extends MovableObject {
  speed = 0.2;
  y = 95;
  height = 350;
  width = 250;
  IMAGES_WALKING = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png"
  ];

  constructor() {
    super().loadImages(this.IMAGES_WALKING);
    this.loadImage("img/4_enemie_boss_chicken/1_walk/G1.png");
    this.x = 720 * 4;
    // this.speed = 0.15 + Math.random() * 0.5;
    this.animate();
  }
}
