//Global Variables
var monkey,monkey_image;
var rock, rock_image;
var banana,banana_image;
var back,back_image;
var ground,ground_image;
var survival;
var gameState, PLAY, END;

function preload(){
 monkey_image = 
    loadAnimation("Monkey1.png","Monkey2.png");
  banana_image = 
    loadImage("banana.png");
  rock_image = 
    loadImage("stone.jpg");
  back_image =
    loadImage("jungle.jpg");
}


function setup() {
  createCanvas(600,300);
  back = createSprite(200,200,10,10);
  back.addImage(back_image);
  monkey = createSprite(40,360,10,10);
  //monkey.addAnimation("monkey",monkey_image);
  ground = createSprite(200,380,400,5);
  ground.visible = false;
  survival = 0;
  PLAY = 1;
  END = 0;
  gameState = PLAY;
}


function draw(){
 background(255);
 if(gameState===PLAY){
  back.velocityX = -4
  if(back.x <20){
  back.x = 200
     }
  if(keyDown("space")){
  monkey.velocityY = -3;
  }
  monkey.velocityY = monkey.velocityY + 0.10;
  monkey.collide(ground);
  Rock();
  Banana();
  survivalTime = Math.round(World.frameCount/8);
  if(monkey.isTouching(Rock)){
    gameState = END;
    playSound("gameOver.png");
}
drawSprites();
  textSize(20);
  text("Survival Time: "+survivalTime,40,40);
 }
 if(gameState === END){
 drawSprites();
   monkey.velocityY = 0;
   rock.velocityX = 0;
   banana.velocityX = 0;
   text("PRESS R TO RESTART",200,100);
   if(keyDown("r")&&gameState === END){
   gameState = PLAY;
     playSound("restart.png");
   }
 }  
}

function Rock(){
 if(World.frameCount%300===0) {
 rock = createSprite(400,380,10,10);
 rock.velocityX = -4; 
 rock.addImage(rock_image);
 rock.scale = 0.13;
 rock.lifetime = 340;   
 }
}

function Banana(){
if(World.frameCount%80===0){
 banana = createSprite(400,357,10,10);
 banana.y= randomNumber(200,357);
 banana.velocityX = -4;
 banana.addImage(banana_image);
 banana.scale = 0.17;
 banana.lifetime = 340; }
}