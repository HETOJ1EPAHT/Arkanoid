function gameOver() {
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(0, 0, 0, 0.01)";
  context.fill();

  context.fillStyle = "red";
  context.font = "25px mono";
  context.textAlign = "center";
  context.fillText("Game Over", canvas.width / 2, canvas.height / 2);

  context.fillText("Press Enter", canvas.width / 2, canvas.height / 2 + 40);
}
