
var boy;
var boyImage;
var edges;
var ground,groundImage;
var food;
var food1,food2,food3,food4;
var r;
var foodGroup
var enemy;
var bombImage;
var brickImage;
var rando;
var enemyGroup;
var score=0;
var PLAY=1
var END=0
var gameState=1
var gameOver;
var hit;
var eat;
function preload(){

boyImage=loadImage("boy2.png")
groundImage=loadImage("ground.png")
food1=loadImage("salad.png")
food2=loadImage("apple.png")
food3=loadImage("banana.png")
food4=loadImage("meat.png")
bombImage=loadImage("bomb.png")
  brickImage=loadImage("brick.png")
  gameOver=loadImage("game.png")
  hit=loadSound("hit.mp3")
  eat=loadSound("eating.mp3")
}

function setup(){
createCanvas(600,600)
boy=createSprite(300,500,10,10)
boy.addImage(boyImage)
boy.scale=0.5
  ground=createSprite(300,550,600,10)
  ground.addImage(groundImage)
  ground.scale=1.5
  
  edges=createEdgeSprites()
  foodGroup=new Group()
  enemyGroup=new Group()
}

function draw(){
background("lightBlue")
  fill("black")
  text("Foodtopia",300,50)
if(gameState===PLAY){
  
  if(keyDown(LEFT_ARROW)){
 boy.x=boy.x-5
    
}
  if(keyDown(RIGHT_ARROW)){
 boy.x=boy.x+5
}
  boy.bounceOff(edges)
spawnfood()
  spawnenemy()
  
  if(boy.isTouching(foodGroup)){
    foodGroup.destroyEach()
    eat.play()
    score=score+1
  }
  

  else{
    if(enemyGroup.isTouching(boy)){
      gameState=END
      hit.play()
     foodGroup.destroyEach()
      enemyGroup.destroyEach()
      foodGroup.setVelocityXEach(0)
      enemyGroup.setVelocityXEach(0)
      boy.addImage(gameOver)
      boy.x=300
      boy.y=300
    }
  }
}


  
  
    
drawSprites()
  text("score: "+score,500,50)
}
function spawnfood(){
  if(World.frameCount%60===0){
  food=createSprite(300,50,10,10)
    food.scale=0.2
  food.velocityY=5
    r=Math.round(random(1,4))
    if(r===1){
      food.addImage(food1)
      
    }
    else if(r===2){
      food.addImage(food2)
    }
    else if(r===3){
      food.addImage(food3)
    }
    else{
      food.addImage(food4)
    }
    food.x=Math.round(random(50,550))
    food.lifetime=120
    foodGroup.add(food)
  }
}
function spawnenemy (){
  if(World.frameCount%200===0){
    enemy=createSprite(300,50,10,10)
    enemy.scale=0.2
    enemy.velocityY=5
    rando=Math.round(random(1,2))
    if(rando===1){
      enemy.addImage(brickImage)
    }
      else{
        enemy.addImage(bombImage)
      }
    enemy.x=Math.round(random(50,550))
    enemy.lifetime=120
    enemyGroup.add(enemy)
  }
  
  
  
}
