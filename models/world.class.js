class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken(), new Chicken()];
  enviroment = [
    new Enviroment("img/5_background/layers/4_clouds/1.png", 0, 0, 720, 440),
    new Enviroment(
      "img/5_background/layers/3_third_layer/1.png",
      0,
      0,
      720,
      480
    ),
    new Enviroment(
      "img/5_background/layers/2_second_layer/1.png",
      0,
      0,
      720,
      480
    ),
    new Enviroment(
      "img/5_background/layers/1_first_layer/1.png",
      0,
      0,
      720,
      480
    )
  ];
  canvas;
  ctx;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.enviroment.forEach((e) => {
      this.addToMap(e);
    });

    this.addToMap(this.character);

    this.enemies.forEach((enemie) => {
      this.addToMap(enemie);
    });

    let self = this; //'This' kann nicht an Callback direkt übergeben werden

    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }
}
