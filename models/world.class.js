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
      this.ctx.drawImage(e.img, e.x, e.y, e.width, e.height);
    });

    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.width,
      this.character.height
    );

    this.enemies.forEach((enemie) => {
      this.ctx.drawImage(
        enemie.img,
        enemie.x,
        enemie.y,
        enemie.width,
        enemie.height
      );
    });

    let self = this; //'This' kann nicht an Callback direkt übergeben werden

    requestAnimationFrame(function () {
      self.draw();
    });
  }
}
