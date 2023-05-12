class StatusBarEndboss extends DrawableObject {
  images = [
    "img/7_statusbars/2_statusbar_endboss/health/0.png",
    "img/7_statusbars/2_statusbar_endboss/health/20.png",
    "img/7_statusbars/2_statusbar_endboss/health/40.png",
    "img/7_statusbars/2_statusbar_endboss/health/60.png",
    "img/7_statusbars/2_statusbar_endboss/health/80.png",
    "img/7_statusbars/2_statusbar_endboss/health/100.png",
  ];

  percentage = 100;

  constructor() {
    super();
    this.loadImages(this.images);
    this.x = 600;
    this.y = 15;
    this.width = 200;
    this.height = 34;
    this.setPercentage(100);
  }
}
