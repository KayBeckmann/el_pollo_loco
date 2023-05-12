class CoinBar extends DrawableObject {
  images = [
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png",
  ];

  percentage = 100;

  constructor() {
    super().loadImage(
      "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png"
    );
    this.loadImages(this.images);
    this.x = 20;
    this.y = 90;
    this.width = 200;
    this.height = 54;
    this.setPercentage(0);
  }
}
