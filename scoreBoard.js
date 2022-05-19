const scoreBoard = document.querySelector("output");

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
      block.score = 90;
    }
    if (block.sprite == "orangeWall") {
      block.score = 60;
    }
  });
}

function scoreCounter({ score }) {
  scoreBoard.innerText = Number(scoreBoard.innerText) + Number(score);
}
