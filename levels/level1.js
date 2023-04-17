//TODO: HEIGHT and WIDTH dynamicly
const level1 = new Level(
  [
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Endboss()
  ],
  [
    new Enviroment("img/5_background/layers/air.png", 0, 0, 720, 480),
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
    ),
    new Enviroment("img/5_background/layers/air.png", 719, 0, 720, 480),
    new Enviroment(
      "img/5_background/layers/3_third_layer/2.png",
      719,
      0,
      720,
      480
    ),
    new Enviroment(
      "img/5_background/layers/2_second_layer/2.png",
      719,
      0,
      720,
      480
    ),
    new Enviroment(
      "img/5_background/layers/1_first_layer/2.png",
      719,
      0,
      720,
      480
    ),
    new Enviroment("img/5_background/layers/air.png", 719 * 2, 0, 720, 480),
    new Enviroment(
      "img/5_background/layers/3_third_layer/1.png",
      719 * 2,
      0,
      720,
      480
    ),
    new Enviroment(
      "img/5_background/layers/2_second_layer/1.png",
      719 * 2,
      0,
      720,
      480
    ),
    new Enviroment(
      "img/5_background/layers/1_first_layer/1.png",
      719 * 2,
      0,
      720,
      480
    ),
    new Enviroment("img/5_background/layers/air.png", 719 * 3, 0, 720, 480),
    new Enviroment(
      "img/5_background/layers/3_third_layer/2.png",
      719 * 3,
      0,
      720,
      480
    ),
    new Enviroment(
      "img/5_background/layers/2_second_layer/2.png",
      719 * 3,
      0,
      720,
      480
    ),
    new Enviroment(
      "img/5_background/layers/1_first_layer/2.png",
      719 * 3,
      0,
      720,
      480
    )
  ],
  [
    new Clouds("img/5_background/layers/4_clouds/1.png", 0, 0, 720, 480),
    new Clouds("img/5_background/layers/4_clouds/2.png", 719, 0, 720, 480),
    new Clouds("img/5_background/layers/4_clouds/1.png", 719 * 2, 0, 720, 480),
    new Clouds("img/5_background/layers/4_clouds/2.png", 719 * 3, 0, 720, 480)
  ],
  720 * 3
);
