class World {
  character = new Character();
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  statusBarEndboss = new StatusBarEndboss();
  bottleBar = new BottleBar();
  coinBar = new CoinBar();
  throwableObjects = [];
  collectedBottle = [];
  collectedCoins = [];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.level = createLevel1(this);
    this.setWorld();
    this.draw();
    this.checkCollisions();
    this.checkBottlesHitEndboss();
    this.checkThrowObjects();
  }

  /**
   * The function sets the world property of a character object to the current object.
   */
  setWorld() {
    this.character.world = this;
  }

  /**
   * The function checks for collisions and collects items in a game at a set interval.
   */
  checkCollisions() {
    setInterval(() => {
      this.checkCollision();
      this.checkFromWhereColiding();
      this.checkCollectionBottles();
      this.checkCollectionCoins();
      this.coinIsCollected();
    }, 1000 / 65);
  }

  /**
   * The function sets an interval to check if a bottle hits an endboss every 200 milliseconds.
   */
  checkBottlesHitEndboss() {
    setInterval(() => {
      this.checkBottleHitEndboss();
    }, 1000 / 5);
  }

  /**
   * The function sets an interval to repeatedly call another function every 1/5th of a second.
   */
  checkThrowObjects() {
    setInterval(() => {
      this.checkThrowObject();
    }, 1000 / 5);
    // evtl timeout einfügen?
  }

  /**
   * The function checks if the character is colliding with a bottle, collects it, updates the collected
   * bottle array and the bottle bar percentage.
   */
  checkCollectionBottles() {
    this.level.bottle.forEach((bottle) => {
      if (this.character.isColliding(bottle)) {
        this.bottleIsCollected();
        this.character.collectBottle();
        this.collectedBottle = this.collectedBottle.splice(0, 4);
        this.collectedBottle.push(bottle);
        this.bottleBar.setPercentage(this.character.bottle);
      }
    });
    if (this.bottleBar.percentage == 100) {
    }
  }

  /**
   * The function checks if the character has collected a bottle and removes it from the level if they
   * have not collected five bottles yet.
   */
  bottleIsCollected() {
    if (this.collectedBottle.length < 5) {
      for (let i = 0; i < this.level.bottle.length; i++) {
        const bottle = this.level.bottle[i];
        if (this.character.isColliding(bottle)) {
          this.level.bottle.splice(i, 1);
        }
      }
    }
  }

  /**
   * This function checks if the game character is colliding with coins in the game level and collects
   * them, updating the coin bar percentage.
   */
  checkCollectionCoins() {
    this.level.coins.forEach((coins) => {
      if (this.character.isColliding(coins)) {
        this.character.collectCoins();
        this.coinBar.setPercentage(this.character.coins);
      }
    });
  }

  /**
   * The function checks if the character has collected a coin in the game level and removes it from the
   * level's coin array if it has been collected.
   */
  coinIsCollected() {
    for (let i = 0; i < this.level.coins.length; i++) {
      const coin = this.level.coins[i];
      if (this.character.isColliding(coin)) {
        this.level.coins.splice(i, 1);
      }
    }
  }

  /**
   * The function checks if the "D" key is pressed and if the character has collected a bottle, then
   * creates a new throwable object at the character's position and removes a bottle from the character's
   * inventory.
   */
  checkThrowObject() {
    if (this.keyboard.D && this.collectedBottle.length > 0) {
      let collectedBottle = new ThrowableObject(
        this.character.x + 100,
        this.character.y + 100
      );
      this.character.bottle -= 20;
      this.bottleBar.setPercentage(this.character.bottle);
      this.throwableObjects = this.throwableObjects.splice(0, 1);
      this.throwableObjects.push(collectedBottle);
      this.collectedBottle.splice(0, 1);
    }
  }

  /**
   * This function checks if a thrown bottle collides with the endboss in a game level and reduces its
   * energy if it does.
   */
  checkBottleHitEndboss() {
    this.throwableObjects.forEach((bottle) => {
      this.level.endboss.forEach((endboss) => {
        if (bottle.isColliding(endboss)) {
          endboss.hitEndboss();
          this.statusBarEndboss.setPercentage(endboss.energy);
          setTimeout(() => {
            this.eraseThrowingBottle(bottle);
          }, 180);
        }
      });
    });
  }

  /**
   * The function removes a specified bottle object from an array of throwable objects.
   * @param bottle - The parameter "bottle" is an object representing a throwing bottle that needs to be
   * removed from an array of throwable objects.
   */
  eraseThrowingBottle(bottle) {
    let i = this.throwableObjects.indexOf(bottle);
    this.throwableObjects.splice(i, 1);
  }

  /**
   * The function checks if the character is above ground and calls a function accordingly.
   */
  checkFromWhereColiding() {
    if (this.character.isAboveGround()) {
      this.hitChickenfromTop();
    } else {
      this.checkCollision();
    }
  }

  /**
   * The function checks if the character hits a chicken from the top and removes it from the array of
   * enemies if it has been killed.
   */
  hitChickenfromTop() {
    this.level.enemies.forEach((enemies) => {
      if (
        this.character.isColliding(enemies) && // pepe is colliding AND...
        this.character.isAboveGround() && // ...above ground - also springend!
        !this.character.isHurt()
      ) {
        if (enemies.energy == 50) {
          enemies.chickenHit();
          playSound(chickenSound, 0.2);
          this.character.jumpAfterKill();
          setTimeout(() => {
            this.eraseEnemyFromArray(enemies);
          }, 750);
        }
      }
    });
  }

  /**
   * The function checks for collisions between the game character and enemies or endbosses, and triggers
   * appropriate actions based on the collision.
   */
  checkCollision() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy) && !this.character.isHurt()) {
        if (this.character.isAboveGround()) {
          this.hitChickenfromTop();
        } else {
          this.character.hit();
          this.statusBar.setPercentage(this.character.energy);
        }
      }
    });
    this.level.endboss.forEach((boss) => {
      if (this.character.isColliding(boss) && !this.character.isHurt()) {
        if (this.character.isAboveGround()) {
          this.hitChickenfromTop();
        } else {
          this.character.hit();
          this.statusBar.setPercentage(this.character.energy);
        }
      }
    });
  }

  /**
   * This function removes an enemy object from an array of enemies in a game level.
   * @param enemy - The enemy object that needs to be removed from the "enemies" array in the "level"
   * object.
   */
  eraseEnemyFromArray(enemy) {
    let i = this.level.enemies.indexOf(enemy);
    this.level.enemies.splice(i, 1);
  }

  /**
   * This function draws all the objects in the game on a canvas, including the character, enemies,
   * coins, and status bars, and updates the camera position.
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.endboss);
    this.addToMap(this.character);
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottle);
    this.ctx.translate(-this.camera_x, 0); // move canva back
    this.addToMap(this.statusBar);
    this.addToMap(this.statusBarEndboss);
    this.addToMap(this.bottleBar);
    this.addToMap(this.coinBar);
    this.ctx.translate(this.camera_x, 0); // move canva forwards
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * This function adds multiple objects to a map by iterating through an array of objects and calling
   * the addToMap function for each object.
   * @param objects - An array of objects that need to be added to a map.
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * The function adds a map object to the canvas and flips its image if necessary.
   * @param mo - an object representing a moving object in a game or animation, which has properties such
   * as position, speed, direction, and image frames. The `addToMap` method adds this object to the game
   * map and draws it on the canvas context (`this.ctx`). If the object is facing the opposite direction
   * (`
   */
  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  /**
   * The flipImage function flips an image horizontally using canvas context.
   * @param mo - It seems that "mo" is an object that has at least two properties: "width" and "x". The
   * function "flipImage" uses the CanvasRenderingContext2D method "translate" to move the origin of the
   * canvas to the right edge of the image ("mo.width"), and then uses
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * The function flips an image back to its original orientation.
   * @param mo - The parameter "mo" is likely an object that represents an image or a graphical element
   * on a canvas. The function "flipImageBack" seems to flip the image horizontally by multiplying its
   * x-coordinate by -1 and then restores the canvas context.
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
