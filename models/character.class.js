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

  world;
  speed = 3;
  walkingSound = new Audio("../audio/walk.mp3");

  constructor() {
    super().loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImage(this.IMAGES_WALKING[0]);
    this.animate();
    this.applyGravity();
  }

  animate() {
    setInterval(() => {
      this.walkingSound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
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
    }, 1000 / 60);

    setInterval(() => {
      if (!this.isDead()) {
        if (this.isAboveGround()) {
          this.drawJump();
        }
        if (this.world.keyboard.UP && !this.isAboveGround()) {
          this.jump();
        }
        if (this.world.keyboard.RIGHT && !this.isAboveGround()) {
          this.drawWalk();
        }
        if (this.world.keyboard.LEFT && !this.isAboveGround()) {
          this.drawWalk();
        }
      } else {
        this.drawDead();
      }
    }, 50);
  }

  drawWalk() {
    if (this.currentImage >= this.IMAGES_WALKING.length) {
      this.currentImage = 0;
    }
    let path = this.IMAGES_WALKING[this.currentImage];
    this.img.src = path;
    this.currentImage = (this.currentImage + 1) % this.IMAGES_WALKING.length;
  }

  drawJump() {
    let path = this.IMAGES_JUMPING[this.currentImage];
    this.img.src = path;
    this.currentImage = (this.currentImage + 1) % this.IMAGES_JUMPING.length;
  }

  drawDead() {
    if (this.currentImage >= this.IMAGES_WALKING.length) {
      this.currentImage = 0;
    }
    let path = this.IMAGES_DEAD[this.currentImage];
    this.img.src = path;
    this.currentImage = (this.currentImage + 1) % this.IMAGES_DEAD.length;
  }
}
