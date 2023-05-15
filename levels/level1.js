let level1;

function createLevel1(world) {
  return new level(
    createEnemies(),
    createEndboss(),
    createClouds(),
    createCoins(),
    createBottles(),
    createBackground()
  );
}

function createEnemies() {
  return [
    new Chicken(world),
    new Chicken(world),
    new Chicken(world),
    new Chicken(world),
    new Chicken(world),
    new Chicken(world),
    new Chicken(world),
    new Chicken(world),
    new Chicken(world),
    new Chicken(world),
    new Chicken(world),
    new Chicken(world)
  ];
}

function createEndboss() {
  return [new Endboss(world)];
}

function createClouds() {
  return [
    new Cloud("./img/5_background/layers/4_clouds/1.png", 100),
    new Cloud("./img/5_background/layers/4_clouds/2.png", 600),
    new Cloud("./img/5_background/layers/4_clouds/2.png", 1100),
    new Cloud("./img/5_background/layers/4_clouds/2.png", 1600),
    new Cloud("./img/5_background/layers/4_clouds/2.png", 2100),
    new Cloud("./img/5_background/layers/4_clouds/2.png", 2600),
    new Cloud("./img/5_background/layers/4_clouds/2.png", 3100),
    new Cloud("./img/5_background/layers/4_clouds/2.png", 3600),
    new Cloud("./img/5_background/layers/4_clouds/2.png", 4100),
    new Cloud("./img/5_background/layers/4_clouds/2.png", 4600),
    new Cloud("./img/5_background/layers/4_clouds/2.png", 5100),
    new Cloud("./img/5_background/layers/4_clouds/2.png", 5600)
  ];
}

function createCoins() {
  return [
    new Coins(world),
    new Coins(world),
    new Coins(world),
    new Coins(world),
    new Coins(world),
    new Coins(world),
    new Coins(world),
    new Coins(world)
  ];
}

function createBottles() {
  return [
    new Bottle(world),
    new Bottle(world),
    new Bottle(world),
    new Bottle(world),
    new Bottle(world),
    new Bottle(world),
    new Bottle(world),
    new Bottle(world),
    new Bottle(world),
    new Bottle(world),
    new Bottle(world)
  ];
}

function createBackground() {
  return [
    new BackgroundObject("./img/5_background/layers/air.png", -719),
    new BackgroundObject("./img/5_background/layers/3_third_layer/1.png", -719),
    new BackgroundObject(
      "./img/5_background/layers/2_second_layer/1.png",
      -719
    ),
    new BackgroundObject("./img/5_background/layers/1_first_layer/1.png", -719),

    new BackgroundObject("./img/5_background/layers/air.png", 0),
    new BackgroundObject("./img/5_background/layers/3_third_layer/2.png", 0),
    new BackgroundObject("./img/5_background/layers/2_second_layer/2.png", 0),
    new BackgroundObject("./img/5_background/layers/1_first_layer/2.png", 0),

    new BackgroundObject("./img/5_background/layers/air.png", 719),
    new BackgroundObject("./img/5_background/layers/3_third_layer/1.png", 719),
    new BackgroundObject("./img/5_background/layers/2_second_layer/1.png", 719),
    new BackgroundObject("./img/5_background/layers/1_first_layer/1.png", 719),

    new BackgroundObject("./img/5_background/layers/air.png", 719 * 2),
    new BackgroundObject(
      "./img/5_background/layers/3_third_layer/2.png",
      719 * 2
    ),
    new BackgroundObject(
      "./img/5_background/layers/2_second_layer/2.png",
      719 * 2
    ),
    new BackgroundObject(
      "./img/5_background/layers/1_first_layer/2.png",
      719 * 2
    ),

    new BackgroundObject("./img/5_background/layers/air.png", 719 * 3),
    new BackgroundObject(
      "./img/5_background/layers/3_third_layer/1.png",
      719 * 3
    ),
    new BackgroundObject(
      "./img/5_background/layers/2_second_layer/1.png",
      719 * 3
    ),
    new BackgroundObject(
      "./img/5_background/layers/1_first_layer/1.png",
      719 * 3
    ),

    new BackgroundObject("./img/5_background/layers/air.png", 719 * 4),
    new BackgroundObject(
      "./img/5_background/layers/3_third_layer/2.png",
      719 * 4
    ),
    new BackgroundObject(
      "./img/5_background/layers/2_second_layer/2.png",
      719 * 4
    ),
    new BackgroundObject(
      "./img/5_background/layers/1_first_layer/2.png",
      719 * 4
    ),

    new BackgroundObject("./img/5_background/layers/air.png", 719 * 5),
    new BackgroundObject(
      "./img/5_background/layers/3_third_layer/1.png",
      719 * 5
    ),
    new BackgroundObject(
      "./img/5_background/layers/2_second_layer/1.png",
      719 * 5
    ),
    new BackgroundObject(
      "./img/5_background/layers/1_first_layer/1.png",
      719 * 5
    ),

    new BackgroundObject("./img/5_background/layers/air.png", 719 * 6),
    new BackgroundObject(
      "./img/5_background/layers/3_third_layer/2.png",
      719 * 6
    ),
    new BackgroundObject(
      "./img/5_background/layers/2_second_layer/2.png",
      719 * 6
    ),
    new BackgroundObject(
      "./img/5_background/layers/1_first_layer/2.png",
      719 * 6
    )
  ];
}
