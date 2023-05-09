class Character extends MovableObject {
  IMAGES_WALKING = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png"
  ];

  IMAGES_JUMPING = [
    "img/2_character_pepe/3_jump/J-31.png",
    "img/2_character_pepe/3_jump/J-32.png",
    "img/2_character_pepe/3_jump/J-33.png",
    "img/2_character_pepe/3_jump/J-34.png",
    "img/2_character_pepe/3_jump/J-35.png",
    "img/2_character_pepe/3_jump/J-36.png",
    "img/2_character_pepe/3_jump/J-37.png",
    "img/2_character_pepe/3_jump/J-38.png",
    "img/2_character_pepe/3_jump/J-39.png"
  ];

  IMAGES_DEAD = [
    "img/2_character_pepe/5_dead/D-51.png",
    "img/2_character_pepe/5_dead/D-52.png",
    "img/2_character_pepe/5_dead/D-53.png",
    "img/2_character_pepe/5_dead/D-54.png",
    "img/2_character_pepe/5_dead/D-55.png",
    "img/2_character_pepe/5_dead/D-56.png",
    "img/2_character_pepe/5_dead/D-57.png"
  ];

  IMAGES_HURT = [
    "img/2_character_pepe/4_hurt/H-41.png",
    "img/2_character_pepe/4_hurt/H-42.png",
    "img/2_character_pepe/4_hurt/H-43.png"
  ];

  world;
  speed = 3;
  walkingSound = new Audio("../audio/walk.mp3");

  constructor() {
    super().loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImage(this.IMAGES_WALKING[0]);
    this.animate();
    this.applyGravity();
  }

  animate() {
    setInterval(() => {
      if (!this.isDead()) {
        this.walkingSound.pause();
        if (
          this.world.keyboard.RIGHT &&
          this.x < this.world.level.level_end_x
        ) {
          this.otherDirection = false;
          this.walkingSound.play();
          this.moveRight();
        }
        if (this.world.keyboard.LEFT && this.x > 100) {
          this.otherDirection = true;
          this.walkingSound.play();
          this.moveLeft();
        }
        this.world.camera_x = -this.x + 100;
      }
    }, 1000 / 60);

    setInterval(() => {
      if (this.isAboveGround()) {
        this.drawAnimation(this.IMAGES_JUMPING);
      }
      if (this.world.keyboard.UP && !this.isAboveGround() && !this.isDead()) {
        this.jump();
      }
      if (this.world.keyboard.RIGHT && !this.isAboveGround()) {
        this.drawAnimation(this.IMAGES_WALKING);
      }
      if (this.world.keyboard.LEFT && !this.isAboveGround()) {
        this.drawAnimation(this.IMAGES_WALKING);
      }
      if (this.isHurt()) {
        this.drawAnimation(this.IMAGES_HURT);
      }
      if (this.isDead()) {
        this.drawAnimation(this.IMAGES_DEAD);
      }
    }, 50);
  }

  drawAnimation(IMAGES) {
    if (this.currentImage >= IMAGES.length) {
      this.currentImage = 0;
    }
    let path = IMAGES[this.currentImage];
    this.img.src = path;
    this.currentImage = (this.currentImage + 1) % IMAGES.length;
  }
}
