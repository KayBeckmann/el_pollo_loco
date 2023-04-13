class Character extends MovableObject {
  IMAGES_WALKING = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png"
  ];

  keyboard;
  speed = 2;
  //y = 230;

  constructor() {
    super().loadImages(this.IMAGES_WALKING);
    this.loadImage(this.IMAGES_WALKING[0]);
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.keyboard.RIGHT) {
        this.drawWalk();
        this.moveRight();
      }
      if (this.keyboard.LEFT) {
        this.drawWalk();
        this.moveLeft();
      }
    }, 150);
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
