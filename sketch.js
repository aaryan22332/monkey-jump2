//Global Variables

var monkey = createSprites(10,10,10,10);
monkey = loadAnimation("Monkey.png");
scale=0.12

var banana = createSprites(200,200,10,10);
banana = loadImage("Banana.png");
scale=0.13

var obstacle = createSprites(380,200,10,10);
obstacle = loadImage("stone.png")
scale=0.14

function preload(){
 
  backImage=loadImage("jungle.png")
  player_running=loadImage("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("Banana.png")
  obstacle_img = loadImage("stone.png")
  monkeyImage = loadImage("Monkey.png")
  

  
}




function setup() {
  createCanvas(400, 400);
  
var monkey = createSprite(10,10,10,10)
monkey=loadAnimation("Monkey.png");
  
var banana = createSprite(200,200,10,10);
banana=loadAnimation("Banana.png");  
  
var obstacle = createSprite(100,100,10,10);
obstacle = loadAnimation("stone.png");
}

function draw() {
  background(220);
  
  var monkey = createSprite(10,10,10,10);
  monkey=loadAnimation("Monkey.png");
  
  var banana = createSprite(200,200,10,10);
  banana=loadAnimation("Banana.png");
  
  var obstacle = createSprite(100,100,10,10);
  obstacle=loadAnimation("stone.png");
  
  drawSprites();
}