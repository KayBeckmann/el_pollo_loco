class Chicken extends MovableObject {
  height = 80;
  width = 80;
  y = 350;
  energy = 50;
  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  images_death = [
    "img/3_enemies_chicken/chicken_normal/2_dead/dead.png",
    "img/3_enemies_chicken/chicken_normal/2_dead/dead.png",
  ];

  images_walking = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.x = 500 + Math.random() * 2000;
    this.loadImages(this.images_walking);
    this.loadImages(this.images_death);
    this.speed = 0.3 + Math.random() * 0.5;
    this.animate();
  }

  /**
   * The function animates a character by continuously moving it left and playing different animations
   * based on its state.
   */
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
    setInterval(() => {
      if (this.isDead()) {
        this.speed = 0;
        this.playAnimation(this.images_death);
      } else {
        this.playAnimation(this.images_walking);
      }
    }, 200);
  }
}
