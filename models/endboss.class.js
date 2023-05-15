class Endboss extends MovableObject {
  height = 400;
  width = 250;
  y = 50;
  speed = 25;
  hadFirstContact = false;
  offset = {
    top: 0,
    bottom: 0,
    left: 20,
    right: 0,
  };

  images_alert = [
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  images_walking = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  images_hurt = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  images_dead = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  world;

  constructor() {
    super().loadImage(this.images_alert[0]);
    this.loadImages(this.images_alert);
    this.loadImages(this.images_walking);
    this.loadImages(this.images_hurt);
    this.loadImages(this.images_dead);
    this.firstContactToEndboss();
    this.x = 2000; // position endboss
  }

  /**
   * The function checks if the distance to a boss is less than 500 and alerts the boss if it is, and
   * then animates if there has been previous contact.
   */
  firstContactToEndboss() {
    let i = 0;
    setInterval(() => {
      if (i < 10 && this.distanceToBoss(500)) {
        this.bossAlert();
        this.hadFirstContact = true;
        console.log("changed contact");
        i++;
      } else if (this.hadFirstContact) {
        this.animate();
      }
    }, 120);
  }

  /**
   * The function controls the animation of a boss character in a game based on its current state and
   * position.
   */
  animate() {
    if (this.isDead()) {
      this.bossDead();
    } else if (!this.isDead() && this.isHurtEndboss()) {
      this.bossHurt();
    } else if (!this.isDead() && this.distanceToBoss(-100)) {
      this.bossMoveRight();
    } else if (!this.isDead() && this.distanceToBoss(500)) {
      this.bossMoveLeft();
    }
  }

  /**
   * The function calculates if the distance between the character and the end boss is less than a given
   * distance.
   * @param distance - The distance parameter is a number that represents the maximum distance between
   * the character and the end boss that we want to check. The function will return true if the distance
   * between the character and the end boss is less than this value, and false otherwise.
   * @returns a boolean value. It is checking if the distance between the character's x-coordinate and
   * the end boss's x-coordinate is less than the given distance parameter. If it is less, then it
   * returns true, otherwise it returns false.
   */
  distanceToBoss(distance) {
    return world.level.endboss[0].x - world.character.x < distance;
  }

  /**
   * This function moves the boss character to the left and plays a walking animation.
   */
  bossMoveLeft() {
    this.x -= this.speed;
    this.playAnimation(this.images_walking);
    this.otherDirection = false;
  }

  /**
   * The function moves the boss character to the right and plays a walking animation.
   */
  bossMoveRight() {
    this.x += this.speed;
    this.playAnimation(this.images_walking);
    this.otherDirection = true;
  }

  /**
   * The function "bossAlert" plays an animation using the "images_alert" parameter.
   */
  bossAlert() {
    this.playAnimation(this.images_alert);
  }

  /**
   * The function bossDead() plays a death animation and sound, then calls the win() function after a 2
   * second delay.
   */
  bossDead() {
    this.playAnimation(this.images_dead);
    playSound(winSound, 0.2);
    setTimeout(() => {
      win();
    }, 2000);
  }

  /**
   * The bossHurt function plays a specific animation and sound effect when called.
   */
  bossHurt() {
    this.playAnimation(this.images_hurt);
    playSound(bottleSplashSound, 0.2);
  }
}
