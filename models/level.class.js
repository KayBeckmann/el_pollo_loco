class Level {
  enemies;
  enviroment;
  clouds;
  level_end_x = 720;

  constructor(enemies, enviroment, clouds, level_end_x) {
    this.enemies = enemies;
    this.enviroment = enviroment;
    this.clouds = clouds;
    this.level_end_x = level_end_x;
  }
}
