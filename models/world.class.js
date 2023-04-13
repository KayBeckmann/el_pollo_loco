class World {
  //Generate Player
  character = new Character();
  //Generate Enemies
  enemies = [new Chicken(), new Chicken(), new Chicken(), new Chicken()];
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
    )
  ];
  clouds = [
    new Clouds(
      "img/5_background/layers/4_clouds/1.png",
      0,
      0,
      canvas.width,
      canvas.height
    )
  ];

  keyboard;
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
    this.character.keyboard = this.keyboard;
  }

  /**
   * Draw the world
   */
  draw() {
    //Clear Canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //Draw the Clouds and Background
    this.addObjectsToMap(this.enviroment);
    this.addObjectsToMap(this.clouds);

    //Draw the Player
    this.addToMap(this.character);

    //Draw the Enemies
    this.addObjectsToMap(this.enemies);

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
  addToMap(myObject) {
    if (myObject.otherDirection) {
      this.ctx.save();
      this.ctx.translate(myObject.width, 0);
      this.ctx.scale(-1, 1);
      myObject.x = myObject.x * -1;
    }
    this.ctx.drawImage(
      myObject.img,
      myObject.x,
      myObject.y,
      myObject.width,
      myObject.height
    );
    if (myObject.otherDirection) {
      myObject.x = myObject.x * -1;
      this.ctx.restore;
    }
  }
}
