class DrawableObject {
  img;
  imageCache = [];
  currentImage = 0;
  x = 120;
  y = 55;
  height = 150;
  width = 100;

  /**
   * The function loads an image from a specified path.
   * @param path - The path parameter is a string that represents the URL or file path of the image that
   * needs to be loaded.
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * This function draws an image on a canvas context with specified coordinates and dimensions.
   * @param ctx - ctx stands for "context" and refers to the 2D rendering context of a canvas element. It
   * is used to draw and manipulate graphics on the canvas.
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * The function loads images from an array and caches them using their file paths as keys.
   * @param arr - an array of image file paths that need to be loaded into the image cache.
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  /**
   * The function sets the percentage property of an object and updates its image accordingly.
   * @param percentage - The percentage parameter is a number that represents the progress or completion
   * percentage of a task or process. It is used to update the image displayed by the code, based on the
   * current progress.
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.images[this.resolveImgIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * The function returns an index value based on the percentage value.
   * @returns The function `resolveImgIndex()` returns a number between 0 and 5 based on the value of the
   * `percentage` property.
   */
  resolveImgIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
