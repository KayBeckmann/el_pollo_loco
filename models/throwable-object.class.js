class ThrowableObject extends MovableObject {
  offset = {
    top: 10,
    bottom: 0,
    left: 10,
    right: 10,
  };
  splashInterval = [];

  image_bottle_rotation = [
    "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  image_bottle_splash = [
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  constructor(x, y) {
    super().loadImage(
      "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
    );
    this.loadImages(this.image_bottle_rotation);
    this.loadImages(this.image_bottle_splash);
    this.x = x;
    this.y = y;
    this.height = 100;
    this.width = 80;
    this.animate();
  }

  /**
   * The animate function calls the throw and splashBottle methods.
   */
  animate() {
    this.throw();
    this.splashBottle();
  }

  /**
   * The function throws a bottle from the character's position with a certain speed and direction while
   * applying gravity and playing a sound.
   */
  throw() {
    this.speedY = 25; //Wurfhöhe
    if (world.character.otherDirection == false) {
      this.x = world.character.x + 50; // Abwurf-Abstand zu Pepe
      setInterval(() => {
        this.x += 7; //Wurfweite
      }, 20);
    } else {
      this.x = world.character.x - 30; // Abwurf-Abstand zu Pepe
      setInterval(() => {
        this.x -= 7; //Wurfweite Rückwärts
      }, 20);
    }
    this.applyGravity();
    playSound(bottleThrowSound, 0.2);
  }

  /**
   * The function splashBottle() plays different animations based on certain conditions.
   */
  splashBottle() {
    this.splashInterval = setInterval(() => {
      if (world.level.endboss[0].isHurtEndboss()) {
        this.playAnimation(this.image_bottle_splash);
      } else if (this.y >= 320) {
        this.playAnimation(this.image_bottle_splash);
      } else if (world.character.splash == true) {
        this.playAnimation(this.image_bottle_splash);
        setTimeout(() => {
          clearInterval(this.splashinterval);
        }, 60);
      } else if (this.y <= 360) {
        this.playAnimation(this.image_bottle_rotation);
      }
    }, 1000 / 25);
  }
}
