const canvas = document.querySelector(".cnvs"),
  ctx = canvas.getContext("2d"),
  foodSnake = new Image();
foodSnake.src = "food.png";

let box = 24;

let score = 0;
let count = document.querySelector(".count");

let food = {
  x: Math.floor(Math.random() * 25) * box,
  y: Math.floor(Math.random() * 25) * box,
};

let snake = [];

snake[0] = {
  x: 280,
  y: 280,
};

document.addEventListener("keydown", direcion);

let dir;

function direcion(event) {
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
    ctx.fillStyle = " black";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  snake.pop();

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
