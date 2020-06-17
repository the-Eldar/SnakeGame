const canvas = document.querySelector(".cnvs"),
  ctx = canvas.getContext("2d"),
  foodSnake = new Image();
foodSnake.src = "food.png";

let box = 24;

let score = 0;
let count = document.querySelector(".count");

let food = {
  x: Math.floor(Math.random() * 17) * box,
  y: Math.floor(Math.random() * 15) * box,
};

let snake = [];

snake[0] = {
  x: 17 * box,
  y: 15 * box,
};

document.addEventListener("keydown", direction);

let dir;

function direction(event) {
  if (event.keyCode == 37 && dir != "right") {
    dir = "left";
  } else if (event.keyCode == 38 && dir != "down") {
    dir = "up";
  } else if (event.keyCode == 39 && dir != "left") {
    dir = "right";
  } else if (event.keyCode == 40 && dir != "up") {
    dir = "down";
  }
}

function draw() {
  ctx.drawImage(foodSnake, food.x, food.y);

  for (let i = 0; i < snake.length; i++) {
    if (i == 0) {
      ctx.fillStyle = " black";
    } else {
      ctx.fillStyle = " grey";
    }
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (snakeX == food.x && snakeY == food.y) {
    score++;
    food = {
      x: Math.floor(Math.random() * 25) * box,
      y: Math.floor(Math.random() * 25) * box,
    };
  } else {
    snake.pop();
  }

  if (dir == "left") {
    snakeX -= box;
  }
  if (dir == "right") {
    snakeX += box;
  }
  if (dir == "up") {
    snakeY -= box;
  }
  if (dir == "down") {
    snakeY += box;
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  snake.unshift(newHead);
}
let game = setInterval(draw, 100);
console.log(score);
