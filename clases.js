class Rect {
  constructor({ x, y, width, height, sprite, spriteX, spriteY }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = sprite;
    this.spriteX = spriteX;
    this.spriteY = spriteY;
  }
}

class Ball extends Rect {
  constructor({ x, y, width, height, speed, angle, sprite, spriteX, spriteY }) {
    super({ x, y, width, height, sprite, spriteX, spriteY });

    this.speed = speed;
    this.angle = angle;
  }
}

class Platform extends Rect {
  constructor({
    x,
    y,
    width,
    height,
    speed,
    leftKey,
    rightKey,
    sprite,
    spriteX,
    spriteY,
  }) {
    super({ x, y, width, height, sprite, spriteX, spriteY });

    this.speed = speed;
    this.rightKey = rightKey;
    this.leftKey = leftKey;
  }
}

class Block extends Rect {
  constructor({ x, y, width, height, sprite, spriteX, spriteY, score }) {
    super({ x, y, width, height, sprite, spriteX, spriteY });

    this.score = score;
  }
}
