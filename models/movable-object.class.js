class MovableObject extends DrawableObject {
  speed = 0;
  speedY = 0;
  acceleration = 2;
  otherDirection = false;
  coins = 0;
  bottle = 0;
  energy = 100;
  lastHit = 0;
  lastMove = 0;
  splash = false;
  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  /**
   * The function applies gravity to an object's vertical movement.
   */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  /**
   * The function checks if an object is above ground level or not.
   * @returns If the object is an instance of ThrowableObject, the function returns true. Otherwise, it
   * checks if the y-coordinate of the object is less than or equal to 150 and returns true if it is, and
   * false otherwise.
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y <= 150;
    }
  }

  /**
   * The function checks if two objects are colliding based on their positions and offsets.
   * @param mo - mo is an object that represents a movable object in a game or simulation. It has
   * properties such as x and y coordinates, width and height, and offset values for collision detection.
   * The isColliding method is used to check if this object is colliding with another object.
   * @returns The function `isColliding` is returning a boolean value indicating whether or not the
   * object represented by `this` is colliding with the object represented by the parameter `mo`.
   */
  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    );
  }

  /**
   * The function "collectCoins" adds 20 coins to the current total if the total is less than 100.
   */
  collectCoins() {
    if (this.coins < 100) {
      this.coins += 20;
    }
  }

  /**
   * The function "collectBottle" adds 20 to the "bottle" variable if it is less than 100.
   */
  collectBottle() {
    if (this.bottle < 100) {
      this.bottle += 20;
    }
  }

  /**
   * The "hit" function decreases the energy of an object by 10 and plays a sound if the energy is not
   * already at 0.
   */
  hit() {
    this.energy -= 10;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
      playSound(ouchSound, 0.2);
    }
  }

  /**
   * The function "chickenHit" reduces the energy of an object by 50 and sets it to 0 if it goes below 0.
   */
  chickenHit() {
    this.energy -= 50;
    if (this.energy <= 0) {
      this.energy = 0;
    }
  }

  /**
   * The function decreases the energy of a boss character by 20 and sets the last hit time if the energy
   * is not negative.
   */
  hitEndboss() {
    this.energy -= 20;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * The function checks if the time passed since the last hit is less than 0.8 seconds.
   * @returns The `isHurt()` function is returning a boolean value. It will return `true` if the time
   * passed since the last hit is less than 0.8 seconds, indicating that the object is still hurt, and
   * `false` otherwise, indicating that the object has recovered from the hit.
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000; // Difference in seconds
    return timepassed < 0.8;
  }

  /**
   * The function checks if the end boss was hurt within the last half second.
   * @returns a boolean value, which is true if the time passed since the last hit is less than 0.5
   * seconds, and false otherwise.
   */
  isHurtEndboss() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 0.5;
  }

  /**
   * The function checks if an object's energy level is equal to zero and returns a boolean value.
   * @returns The `isDead()` method is returning a boolean value that indicates whether the energy of the
   * object is equal to zero or not. If the energy is equal to zero, it will return `true`, indicating
   * that the object is dead. Otherwise, it will return `false`, indicating that the object is still
   * alive.
   */
  isDead() {
    return this.energy == 0;
  }

  /**
   * The function sets the last move timestamp to the current time.
   */
  getMoveTimeStamp() {
    this.lastMove = new Date().getTime();
  }

  /**
   * The function checks if the time passed since the last move is greater than 3 seconds, indicating
   * that the user has fallen asleep.
   * @returns The function `fallInSleep()` is returning a boolean value. It will return `true` if the
   * time passed since the last move is greater than 3 seconds, indicating that the person has fallen
   * asleep. Otherwise, it will return `false`.
   */
  fallInSleep() {
    let timepassed = new Date().getTime() - this.lastMove;
    timepassed = timepassed / 1000;
    return timepassed > 3.0;
  }

  /**
   * The function plays an animation by cycling through a given array of images.
   * @param images - An array of image paths that will be used to play an animation.
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * The function moves an object to the right by increasing its x-coordinate based on its speed.
   */
  moveRight() {
    this.x += this.speed;
  }

  /**
   * The function moves an object to the left based on its speed.
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * The "jump" function sets the value of "speedY" to 25.
   */
  jump() {
    this.speedY = 25;
  }

  /**
   * The function sets the vertical speed of an object to 15, causing it to jump after a kill event.
   */
  jumpAfterKill() {
    this.speedY = 15;
  }
}
