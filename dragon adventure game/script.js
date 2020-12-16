newscore = 0;
audio = new Audio("mariotune.mp3");
setTimeout(() => {
  audio.play();
}, 500);
document.onkeydown = function (e) {
  // console.log(e.keyCode);
  if (e.keyCode == 38) {
    dino = document.querySelector(".dino");
    dino.classList.add("jumpDino");
    setTimeout(() => {
      dino.classList.remove("jumpDino");
    }, 700);
  }
  if (e.keyCode == 39) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 112 + "px";
  }
  if (e.keyCode == 37) {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX - 112 + "px";
  }
};

setInterval(() => {
  dino = document.querySelector(".dino");
  gameover = document.querySelector(".gameover");
  evil = document.querySelector(".evil");
  gameend = new Audio("mariodie.wav");
  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));
  ex = parseInt(window.getComputedStyle(evil, null).getPropertyValue("left"));
  ey = parseInt(window.getComputedStyle(evil, null).getPropertyValue("top"));
  offsetx = Math.abs(dx - ex);
  offsety = Math.abs(dy - ey);

  if (offsetx < 135 && offsety < 100) {
    console.log("GameOver");
    evil.classList.remove("evilMove");
    gameover.innerHTML = "Game Over";
    dino.classList.add("dinokilled");
    audio.pause();
    gameend.play();
    setTimeout(() => {
      dino.classList.remove("dinokilled");
    }, 4000);
    setTimeout(() => {
      gameend.pause();
    }, 1000);
  }
}, 100);
setInterval(() => {
  if (evil.classList[1]) {
    newscore += 100;
    updateScore(newscore);
  } else {
    score = document.querySelector(".score");
    score.classList.remove("score");
    score.classList.add("endscore");
    playagain = document.querySelector(".playagain");
    playagain.innerHTML = "Reload to Play again";
  }
}, 2000);

function updateScore(newscore) {
  score = document.querySelector(".score");
  score.innerHTML = "Your Score: " + newscore;
}
