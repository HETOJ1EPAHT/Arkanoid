function gameRestart() {
  loose = false;

  blocks.length = 0;
  createBlocks();

  ball.x = canvas.width / 2;
  ball.y = 450;
  ball.angle = Math.PI / 4 + (Math.random() * Math.PI) / 2;

  platform.x = canvas.width / 2 - 32;
  platform.y = canvas.height - 20;

  scoreBoard.innerText = "0000";
}
