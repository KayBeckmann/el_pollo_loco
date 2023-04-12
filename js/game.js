let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas);
}

window.addEventListener("keydown", (event) => {
  if (event.keyCode == 38 || event.keyCode == 87) {
    console.log("JUMP");
  }
  if (event.keyCode == 40 || event.keyCode == 83) {
    console.log("DOWN");
  }
  if (event.keyCode == 37 || event.keyCode == 65) {
    console.log("LEFT");
  }
  if (event.keyCode == 39 || event.keyCode == 68) {
    console.log("RIGHT");
  }
  if (event.keyCode == 32) {
    console.log("SPACE");
  }
});
