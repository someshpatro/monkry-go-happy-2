var bananaImage;
var obstacleImage;
var obstacleGroup;
var backg, back;
var score;

function preload(){
  backg = loadImage("jungle.jpg");
  
player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("stone.png");
}
function setup() {
 createCanvas(400,400);
  
}

function draw() {
drawSprites();
}