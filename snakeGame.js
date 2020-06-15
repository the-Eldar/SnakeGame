const canvas = document.querySelector(".cnvs"),
  ctx = canvas.getContext("2d"),
  foodSnake = new Image();
foodSnake.src = "food.png";

let box = 32;

let score = 0;

let food = {
  x: Math.floor(Math.random() * 25) * box,
  y: Math.floor(Math.random() * 25) * box,
};

let snake = [];

snake[0] = {
  x: 300,
  y: 280,
};

function draw() {
  ctx.drawImage(foodSnake, food.x, food.y);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = " black";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }
}
let game = setInterval(draw, 100);
