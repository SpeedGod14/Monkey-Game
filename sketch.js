
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var ground
var survivalTime = 0;

function preload(){  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  

}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(50,270,25,25);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(200,350,400,100)
  ground.x = ground.width /2;
  console.log(ground.x)
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
}


function draw() {
  background("green");
  
  if(keyDown("space")) {
        monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  
  drawSprites();
  spawnObstacles();
  
  score = score + Math.round(getFrameRate()/60);
  
  spawnFood();
  spawnObstacles();

  
}

function spawnFood(){
  if(frameCount % 80 === 0){
    var banana = createSprite(400,100,10,10);
    banana.scale = 0.1
    banana.y = Math.round(random(100,150));
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.lifetime = 150;
    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(400,280,50,50);
    obstacle.velocityX = -6
    var rand = Math.round(random(1,6));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}