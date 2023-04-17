class Character extends MovableObject {
  IMAGES_WALKING = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png"
  ];

  world;
  speed = 3;
  walkingSound = new Audio("../audio/walk.mp3");

  constructor() {
    super().loadImages(this.IMAGES_WALKING);
    this.loadImage(this.IMAGES_WALKING[0]);
    this.animate();
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
      if (this.world.keyboard.RIGHT) {
        this.drawWalk();
      }
      if (this.world.keyboard.LEFT) {
        this.drawWalk();
      }
    }, 50);
  }

  drawWalk() {
    let path = this.IMAGES_WALKING[this.currentImage];
    this.img.src = path;
    this.currentImage = (this.currentImage + 1) % this.IMAGES_WALKING.length;
  }

  jump() {}

  moveLeft() {
    this.x = this.x - this.speed;
  }

  moveRight() {
    this.x = this.x + this.speed;
  }
}
