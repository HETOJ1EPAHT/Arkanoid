const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

let loose = false;

const ball = new Ball({
  sprite: "energyBall",
  spriteX: 5,
  spriteY: 4,
  x: canvas.width / 2,
  y: 450,
  width: 10,
  height: 10,
  speed: 2,
  angle: Math.PI / 4 + (Math.random() * Math.PI) / 2,
});

const platform = new Platform({
  sprite: "vausSpacecraft",
  spriteX: 32,
  spriteY: 8,
  x: canvas.width / 2 - 32,
  y: canvas.height - 20,
  width: 64,
  height: 16,
  speed: 4,
  leftKey: false,
  rightKey: false,
});

const colors = ["orangeWall", "redWall", "blueWall", "greenWall"];

const blocks = [];

const limitter = [
  { x: 0, y: -10, width: canvas.width, height: 10 },
  { x: canvas.width, y: 0, width: 10, height: canvas.height },
  { x: 0, y: canvas.height, width: canvas.width, height: 10 },
  { x: -10, y: 0, width: 10, height: canvas.height },
];
createBlocks();

requestAnimationFrame(loop);

let pTime = 0;
function loop(time) {
  requestAnimationFrame(loop);

  if (!loose) {
    cleareCanvas();
    ball.x += ball.speed * Math.cos(ball.angle);
    ball.y -= ball.speed * Math.sin(ball.angle);

    if (platform.leftKey) {
      platform.x = Math.max(0, platform.x - platform.speed);
    }
    if (platform.rightKey) {
      platform.x = Math.min(
        canvas.width - platform.width,
        platform.x + platform.speed
      );
    }

    for (let block of blocks) {
      if (isIntersection(ball, block)) {
        toggleItem(blocks, block);
        scoreCounter(block);

        const cntrlBlocks = [
          {
            x: block.x - 10,
            y: block.y - 10,
            width: block.width + 10,
            height: 10,
          },
          {
            x: block.x + block.width,
            y: block.y,
            width: 10,
            height: block.height,
          },
          {
            x: block.x - 10,
            y: block.y + block.height,
            width: block.width + 20,
            height: 10,
          },
          {
            x: block.x - 10,
            y: block.y,
            width: 10,
            height: block.height,
          },
        ];

        if (
          isIntersection(ball, cntrlBlocks[0]) ||
          isIntersection(ball, cntrlBlocks[2])
        ) {
          ball.angle = Math.PI * 2 - ball.angle;
        }
        if (
          isIntersection(ball, cntrlBlocks[1]) ||
          isIntersection(ball, cntrlBlocks[3])
        ) {
          ball.angle = Math.PI - ball.angle;
        }
        break;
      }
    }

    //loose
    if (isIntersection(ball, limitter[2])) {
      loose = true;
    }
    //bounce from wall
    if (isIntersection(ball, limitter[0])) {
      ball.angle = Math.PI * 2 - ball.angle;
    }
    if (
      isIntersection(ball, limitter[1]) ||
      isIntersection(ball, limitter[3])
    ) {
      ball.angle = Math.PI - ball.angle;
    }
    //bounce from platform
    if (isIntersection(ball, platform)) {
      const x = ball.x + ball.width / 2;
      const percent = (x - platform.x) / platform.width;

      ball.angle = Math.PI - Math.PI * percent;
    }

    drawSmth(ball);
    blocks.forEach((block) => drawSmth(block));
    drawSmth(platform);
  } else {
    gameOver();
  }
}

function cleareCanvas() {
  canvas.width = canvas.width;
}

function toggleItem(array, item) {
  if (array.includes(item)) {
    const index = array.indexOf(item);
    const toogled = array[index];
    array.splice(index, 1);
  } else {
    array.push(item);
  }
}

function drawSmth({ x, y, width, height, sprite, spriteX, spriteY }) {
  const img = new Image();
  img.src = `./sprites/${sprite}.png`;
  context.drawImage(img, 0, 0, spriteX, spriteY, x, y, width, height);
}

function randomColor(colorsArray) {
  const index = Math.floor(Math.random() * colorsArray.length);

  return colorsArray[index];
}

function createBlocks() {
  for (let x = 0; x <= 8; x++) {
    for (let y = 0; y <= 5; y++) {
      blocks.push(
        new Block({
          x: 25 + 50 * x,
          y: 25 + 50 * y,
          width: 50,
          height: 20,
          sprite: randomColor(colors),
          spriteX: 16,
          spriteY: 8,
        })
      );
    }
  }
  getScoreByColor(blocks);
  return blocks;
}
