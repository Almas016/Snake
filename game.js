const canvas = document.getElementById("main");
const context = canvas.getContext("2d");

const background = new Image();
background.src = "img/1562688808.png";

const foodImg = new Image();
foodImg.src = "img/1562688805.png";

let box = 32;

let score = 0;

let food = {
	x: Math.floor((Math.random() * 17 + 1)) * box,
	y: Math.floor((Math.random() * 15 + 3)) * box,
};

let snake = [];
snake[0] = {
	x: 9 * box,
	y: 10 * box
};

document.addEventListener("keydown", direction);

let dir;

function direction(event) {
	if(event.keyCode == 37 && dir != "right")
		dir = "left";
	else if(event.keyCode == 38 && dir != "down")
		dir = "up";
	else if(event.keyCode == 39 && dir != "left")
		dir = "right";
	else if(event.keyCode == 40 && dir != "up")
		dir = "down";
}

function eatTail(head, arr) {
	for(let i = 0; i < arr.length; i++) {
		if(head.x == arr[i].x && head.y == arr[i].y)
			clearInterval(game);
	}
}

function drawGame() {
	context.drawImage(background, 0, 0);

	context.drawImage(foodImg, food.x, food.y);

	for(let i = 0; i < snake.length; i++) {
		context.fillStyle = i == 0 ? "green" : "red";
		context.fillRect(snake[i].x, snake[i].y, box, box);
	}

	context.fillStyle = "white";
	context.font = "50px Arial";
	context.fillText(score, box * 2.5, box * 1.7);

	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

}