function getScoreByColor(array) {
  array.forEach((block) => {
    let score = null;
    if (block.sprite == "blueWall") {
      block.score = 100;
    }
    if (block.sprite == "greenWall") {
      block.score = 80;
    }
    if (block.sprite == "redWall") {
      block.score = 60;
    }
    if (block.sprite == "orangeWall") {
      block.score = 40;
    }
  });
}

function scoreCounter({ score }) {
  scoreBoard.value = Number(scoreBoard.value) + Number(score);
}
