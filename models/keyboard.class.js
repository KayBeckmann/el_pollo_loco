class Keyboard {
  LEFT = false;
  RIGHT = false;
  UP = false;
  DOWN = false;
  SPACE = false;
  D = false;

  constructor() {
    this.eventKeyboardBtns();
    this.eventTouchpadBtns();
  }

  /* The `eventKeyboardBtns()` function is adding an event listener to the window object for the
  "keydown" event. When a key is pressed, the function inside the event listener is executed. The
  function checks which key was pressed and sets the corresponding property of the Keyboard object
  to true. If the pressed key is "ArrowRight" or "d", the RIGHT property is set to true and a sound
  called "walkingSound" is played. If the pressed key is "ArrowLeft" or "a", the LEFT property is
  set to true and the "walkingSound" is played. If the pressed key is "ArrowUp", "w", or " ", the UP
  property is set to true. If the pressed key is "e", the D property is set to true. */
  eventKeyboardBtns() {
    window.addEventListener("keydown", (event) => {
      if (event.key == "ArrowRight" || event.key == "d") {
        keyboard.RIGHT = true;
        playSound(walkingSound, 1);
      }
      if (event.key == "ArrowLeft" || event.key == "a") {
        keyboard.LEFT = true;
        playSound(walkingSound, 1);
      }
      if (event.key == "ArrowUp" || event.key == "w" || event.key == " ") {
        keyboard.UP = true;
      }
      if (event.key == "e") {
        keyboard.D = true;
      }
    });

    /* This code is adding an event listener to the window object for the "keyup" event. When a key is
    released, the function inside the event listener is executed. The function checks which key was
    released and sets the corresponding property of the Keyboard object to false. If the released
    key is "ArrowRight" or "d", the RIGHT property is set to false and a sound called "walkingSound"
    is stopped. If the released key is "ArrowLeft" or "a", the LEFT property is set to false and the
    "walkingSound" is stopped. If the released key is "ArrowUp", "w", or " ", the UP property is set
    to false. If the released key is "e", the D property is set to false. */
    window.addEventListener("keyup", (event) => {
      if (event.key == "ArrowRight" || event.key == "d") {
        keyboard.RIGHT = false;
        stopSound(walkingSound);
      }
      if (event.key == "ArrowLeft" || event.key == "a") {
        keyboard.LEFT = false;
        stopSound(walkingSound);
      }
      if (event.key == "ArrowUp" || event.key == "w" || event.key == " ") {
        keyboard.UP = false;
      }
      if (event.key == "e") {
        keyboard.D = false;
      }
    });
  }

  /**
   * This function adds touch event listeners to control buttons for a game.
   */
  eventTouchpadBtns() {
    setTimeout(() => {
      document
        .getElementById("control-left")
        .addEventListener("touchstart", (event) => {
          event.preventDefault();
          this.LEFT = true;
        });

      document
        .getElementById("control-left")
        .addEventListener("touchend", (event) => {
          event.preventDefault();
          this.LEFT = false;
        });

      document
        .getElementById("control-right")
        .addEventListener("touchstart", (event) => {
          event.preventDefault();
          this.RIGHT = true;
        });

      document
        .getElementById("control-right")
        .addEventListener("touchend", (event) => {
          event.preventDefault();
          this.RIGHT = false;
        });

      document
        .getElementById("control-jump")
        .addEventListener("touchstart", (event) => {
          event.preventDefault();
          this.UP = true;
        });

      document
        .getElementById("control-jump")
        .addEventListener("touchend", (event) => {
          event.preventDefault();
          this.UP = false;
        });

      document
        .getElementById("control-throw")
        .addEventListener("touchstart", (event) => {
          event.preventDefault();
          this.D = true;
        });

      document
        .getElementById("control-throw")
        .addEventListener("touchend", (event) => {
          event.preventDefault();
          this.D = false;
        });
    }, 500);
  }
}
