document.addEventListener("keydown", (event) => {
  if (event.code == "ArrowRight") {
    platform.rightKey = true;
  }
  if (event.code == "ArrowLeft") {
    platform.leftKey = true;
  }
  if (event.code == "Enter" && loose) {
    gameRestart();
  }
});
document.addEventListener("keyup", (event) => {
  if (event.code == "ArrowRight") {
    platform.rightKey = false;
  }
  if (event.code == "ArrowLeft") {
    platform.leftKey = false;
  }
});
