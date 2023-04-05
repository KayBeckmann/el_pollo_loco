class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken(), new Chicken()];
  canvas;
  ctx;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
