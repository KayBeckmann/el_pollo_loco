class World {
  //Generate Player
  character = new Character();
  //Generate Enemies
  enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken()
  ];
  //Generate Enviroment
  enviroment = [
    new Enviroment(
      "img/5_background/layers/air.png",
      0,
      0,
      canvas.width,
      canvas.height
    ),
    new Enviroment(
      "img/5_background/layers/3_third_layer/1.png",
      0,
      0,
      canvas.width,
      canvas.height
    ),
    new Enviroment(
      "img/5_background/layers/2_second_layer/1.png",
      0,
      0,
      canvas.width,
      canvas.height
    ),
    new Enviroment(
      "img/5_background/layers/1_first_layer/1.png",
      0,
      0,
      canvas.width,
      canvas.height
    ),
    new Enviroment(
      "img/5_background/layers/air.png",
      719,
      0,
      canvas.width,
      canvas.height
    ),
    new Enviroment(
      "img/5_background/layers/3_third_layer/2.png",
      719,
      0,
      canvas.width,
      canvas.height
    ),
    new Enviroment(
      "img/5_background/layers/2_second_layer/2.png",
      719,
      0,
      canvas.width,
      canvas.height
    ),
    new Enviroment(
      "img/5_background/layers/1_first_layer/2.png",
      719,
      0,
      canvas.width,
      canvas.height
    ),
    new Enviroment(
      "img/5_background/layers/air.png",
      719 * 2,
      0,
      canvas.width,
      canvas.height
    ),
    new Enviroment(
      "img/5_background/layers/3_third_layer/1.png",
      719 * 2,
      0,
      canvas.width,
      canvas.height
    ),
    new Enviroment(
      "img/5_background/layers/2_second_layer/1.png",
      719 * 2,
      0,
      canvas.width,
      canvas.height
    ),
    new Enviroment(
      "img/5_background/layers/1_first_layer/1.png",
      719 * 2,
      0,
      canvas.width,
      canvas.height
    ),
    new Enviroment(
      "img/5_background/layers/air.png",
      719 * 3,
      0,
      canvas.width,
      canvas.height
    ),
    new Enviroment(
      "img/5_background/layers/3_third_layer/2.png",
      719 * 3,
      0,
      canvas.width,
      canvas.height
    ),
    new Enviroment(
      "img/5_background/layers/2_second_layer/2.png",
      719 * 3,
      0,
      canvas.width,
      canvas.height
    ),
    new Enviroment(
      "img/5_background/layers/1_first_layer/2.png",
      719 * 3,
      0,
      canvas.width,
      canvas.height
    )
  ];
  clouds = [
    new Clouds(
      "img/5_background/layers/4_clouds/1.png",
      0,
      0,
      canvas.width,
      canvas.height
    ),
    new Clouds(
      "img/5_background/layers/4_clouds/2.png",
      719,
      0,
      canvas.width,
      canvas.height
    ),
    new Clouds(
      "img/5_background/layers/4_clouds/1.png",
      719 * 2,
      0,
      canvas.width,
      canvas.height
    ),
    new Clouds(
      "img/5_background/layers/4_clouds/2.png",
      719 * 3,
      0,
      canvas.width,
      canvas.height
    )
  ];

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
    this.addObjectsToMap(this.enviroment);
    this.addObjectsToMap(this.clouds);

    //Draw the Player
    this.addToMap(this.character);

    //Draw the Enemies
    this.addObjectsToMap(this.enemies);

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
  }
}
