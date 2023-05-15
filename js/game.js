let canvas;
let world;
let keyboard = new Keyboard();

// sounds
let backgroundMusic = new Audio("./audio/western-music.mp3");
let chickenSound = new Audio("./audio/chicken.mp3");
let bottleThrowSound = new Audio("./audio/bottle-throw.mp3");
let bottleSplashSound = new Audio("./audio/bottle-splash.mp3");
let winSound = new Audio("./audio/win.mp3");
let walkingSound = new Audio("./audio/walking.mp3");
let ouchSound = new Audio("./audio/ouch.mp3");
let gameOverSound = new Audio("./audio/gameover.mp3");

/**
 * The function starts the game by creating level 1, initializing the world, hiding the start screen,
 * and playing background music.
 */
function startGame() {
  level1 = createLevel1(world);
  initWorld();
  hide("start-screen");
  playSound(backgroundMusic, 0.05);
}

/**
 * The function initializes a world object with a canvas and keyboard input.
 */
function initWorld() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

/**
 * The above code contains two functions, one to clear all intervals and another to toggle the
 * visibility of an HTML element.
 */
function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

/**
 * The function toggles the visibility of an HTML element by adding or removing the "d-none" class.
 * @param id - The id parameter is a string that represents the id attribute of the HTML element that
 * we want to toggle the visibility of.
 */
function toggleVisibility(id) {
  let element = document.getElementById(id);
  if (element.classList.contains("d-none")) {
    element.classList.remove("d-none");
  } else {
    element.classList.add("d-none");
  }
}

/**
 * The function plays a sound with a specified volume.
 * @param sound - The sound parameter is a variable that represents an audio file or object that can be
 * played using JavaScript. It could be an HTML5 audio element or an instance of the Audio class in
 * JavaScript.
 * @param volume - The volume parameter is a number that represents the volume level of the sound. It
 * can range from 0 (silent) to 1 (maximum volume).
 */
function playSound(sound, volume) {
  sound.play();
  sound.volume = volume;
}

/**
 * The function toggles the sound on and off and changes the sound icon accordingly.
 */
function toggleSounds() {
  let soundImg = document.getElementById("sound-image");
  if (soundImg.src.includes("_on")) {
    soundImg.src = "./img/icons/volume_off.svg";
    toggleAllSounds(true);
  } else if (soundImg.src.includes("_off")) {
    soundImg.src = "./img/icons/volume_on.svg";
    toggleAllSounds(false);
  }
}

/**
 * The function stops a given sound from playing.
 * @param sound - The sound parameter is a variable that represents an audio element in HTML. It is
 * used in the function to pause the audio playback.
 */
function stopSound(sound) {
  sound.pause();
}

/**
 * The function toggles the mute status of multiple sounds.
 * @param status - a boolean value that determines whether to mute or unmute all sounds. If status is
 * true, all sounds will be muted. If status is false, all sounds will be unmuted.
 */
function toggleAllSounds(status) {
  backgroundMusic.muted = status;
  chickenSound.muted = status;
  bottleThrowSound.muted = status;
  bottleSplashSound.muted = status;
  winSound.muted = status;
  walkingSound.muted = status;
  ouchSound.muted = status;
  gameOverSound.muted = status;
}

/**
 * The function stops all sounds in a game.
 */
function stopAllSounds() {
  stopSound(backgroundMusic);
  stopSound(chickenSound);
  stopSound(bottleThrowSound);
  stopSound(bottleSplashSound);
  stopSound(ouchSound);
}

/**
 * The function restarts the game by showing the start screen.
 */
function restartGame() {
  showScreen("start-screen");
}

/**
 * The function hides all screens except for the one specified by the "name" parameter.
 * @param name - The name of the screen that needs to be displayed. It could be "loading-screen",
 * "start-screen", "game-over-screen", or "win-screen".
 */
function showScreen(name) {
  hide("loading-screen");
  hide("start-screen");
  hide("game-over-screen");
  hide("win-screen");
  display(name);
}

/**
 * The function adds the "d-none" class to an HTML element with a specified ID to hide it.
 * @param id - The parameter "id" is a string that represents the ID of an HTML element that we want to
 * hide. The function uses the document.getElementById() method to select the element with the
 * specified ID and then adds the "d-none" class to it using the classList.add() method. This class is
 */
function hide(id) {
  document.getElementById(id).classList.add("d-none");
}

/**
 * The function removes the "d-none" class from an HTML element with a specified ID, making it visible.
 * @param id - The parameter "id" is a string that represents the ID of an HTML element that we want to
 * display. The function "display" uses the getElementById method to select the element with the
 * specified ID and then removes the "d-none" class from its classList. This class is often used to
 */
function display(id) {
  document.getElementById(id).classList.remove("d-none");
}

/**
 * The function "win" mutes the walking sound, shows the win screen, hides the game controls for
 * mobile, clears all intervals, and stops all sounds.
 */
function win() {
  walkingSound.muted = true;
  showScreen("win-screen");
  hide("game-controls-mobile");
  clearAllIntervals();
  stopAllSounds();
}

/**
 * The function "gameOver" stops all sounds, shows the game over screen, hides the game controls for
 * mobile, and clears all intervals.
 */
function gameOver() {
  playSound(gameOverSound, 0.5);
  walkingSound.muted = true;
  stopAllSounds();
  showScreen("game-over-screen");
  hide("game-controls-mobile");
  clearAllIntervals();
}
