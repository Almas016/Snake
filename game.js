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