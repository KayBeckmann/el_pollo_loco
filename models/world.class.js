class World {
  //Generate Player
  character = new Character();

  //Generate Level
  level = level1;

  keyboard;
  camera_x = 0;
  canvas;
  ctx;

  /**
   * Initialisation
   * @param {HTML-Element} canvas
   */
  constructor(canvas, keyboard) {
    this.keyboard = keyboard;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.draw();
    this.setKeyboard();
  }

  setKeyboard() {
    this.character.world = this;
  }

  /**
   * Draw the world
   */
  draw() {
    //Clear Canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //move world left
    this.ctx.translate(this.camera_x, 0);

    //Draw the Clouds and Background
    this.addObjectsToMap(this.level.enviroment);
    this.addObjectsToMap(this.level.clouds);

    //Draw the Player
    this.addToMap(this.character);

    //Draw the Enemies
    this.addObjectsToMap(this.level.enemies);

    this.ctx.translate(-this.camera_x, 0);

    //'This' kann nicht an Callback direkt übergeben werden
    let self = this;

    //Callback-Recursion damit der PC nicht abstürzt -> Recursion führt zu unzulässiger Endlosschleife
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * @param {OBJECT} objects Array of Elements to draw
   */
  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  /**
   * Draw the Object on the HTML-Canvas
   * @param {OBJECT} myObject
   */
  addToMap(mo) {
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.width, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
    this.drawRectangle(mo);
  }

  drawRectangle(mo) {
    this.ctx.beginPath();
    this.ctx.lineWidth = `2`;
    this.ctx.strokeStyle = `blue`;
    this.ctx.rect(mo.x, mo.y, mo.width, mo.height);
    this.ctx.stroke();
  }
}
