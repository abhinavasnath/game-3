var PLAY = 1;
var END = 0;
var gameState = PLAY;

var virus1,virus2,virus3;
var heart1,heart2,heart3,heart1img,heart2img,heart3img;
var zombie1,zombie2;
var girl,backgroundimg;
var virus1img,virus2img,virus3img,zombie1img,zombie2img,girlimg,waterSplashimg;

function preload(){
  backgroundimg = loadImage("images/hospital.jpg");
  virus1img= loadImage("images/virus1.png");
  virus2img= loadImage("images/virus2.png");
  virus3img= loadImage("images/virus3.png");
  zombie1img= loadImage("images/zombie1.png");
  zombie2img= loadImage("images/zombie2.png");
  girlimg= loadImage("images/girl.png");
  waterSplashimg=loadImage("images/waterdrop.png");
  sanitizerimg=loadImage("images/sanitizer.png");
  heart1img=loadImage("images/heart.png");
  heart2img=loadImage("images/heart.png");
  heart3img=loadImage("images/heart.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  girl=createSprite(windowWidth/2-600,windowHeight/2+200,50,50);
  girl.addImage("girl",girlimg);
  girl.scale=0.58;

  sanitizer=createSprite(windowWidth/2-560,windowHeight/2+200,50,50);
  sanitizer.addImage("sanitizer",sanitizerimg);
  sanitizer.scale=0.035;
  
  
}

function draw() {
  background(backgroundimg);
if (gameState===PLAY){
  sanitizer.y=mouseY;
  var randomEnemies=Math.round(random(1,5));
  if(frameCount%60===0){
    if(randomEnemies===1){
      virus1();
    }
    else if(randomEnemies===2){
      virus2();
    }
    else if(randomEnemies===3){
      virus3();
    }
    else if(randomEnemies===4){
      zombie1();
    }
    else if(randomEnemies===5){
        zombie2();
    }
   
  }
  var randomFriends=Math.round(random(1,3));
  if(frameCount%1000===0){
    if(randomFriends===1){
      heart1();
    }
    else if(randomFriends===2){
      heart2();
    }
    else if(randomFriends===3){
      heart3();
    }

  }
     
    
  }
  if(keyDown("space")){
    splash();
  }

  drawSprites();
}
function virus1(){
  if(frameCount%10===0){
    yellowVirus=createSprite(windowWidth/2+800,Math.round(random(55,60)),10,10);
    yellowVirus.addImage("virus1",virus1img);
    yellowVirus.velocityX=-4;
    yellowVirus.scale=0.05;


  }
}
function virus2(){
  if(frameCount%10===0){
    greenVirus=createSprite(windowWidth/2+800,Math.round(random(240,250)),10,10);
    greenVirus.addImage("virus2",virus2img);
    greenVirus.velocityX=-4;
    greenVirus.scale=0.4;

  }
}
function virus3(){
  if(frameCount%10===0){
    redVirus=createSprite(windowWidth/2+800,Math.round(random(380,390)),10,10);
    redVirus.addImage("virus3",virus3img);
    redVirus.velocityX=-4;
    redVirus.scale=0.1;

  }
}
function zombie1(){
  if(frameCount%50===0){
    greenZombie=createSprite(windowWidth/2+800,Math.round(random(600,610)),10,10);
    greenZombie.addImage("zombie1",zombie1img);
    greenZombie.velocityX=-3;
    greenZombie.scale=0.55;

  }
}
function zombie2(){
  if(frameCount%50===0){
    redZombie=createSprite(windowWidth/2+800,Math.round(random(590,600)),10,10);
    redZombie.addImage("zombie2",zombie2img);
    redZombie.velocityX=-3;
    redZombie.scale=0.18;

  }
}
function splash(){
  waterSplash=createSprite(100,100,50,50);
  waterSplash.addImage("water",waterSplashimg);
  waterSplash.x=sanitizer.x+110;
  waterSplash.y=sanitizer.y-50;
  waterSplash.velocityX=3;
  waterSplash.scale=0.2;
  
 }
 function heart1(){
  if(frameCount%1000===0){
    redHeart=createSprite(windowWidth/2+2000,Math.round(random(55,60)),10,10);
    redHeart.addImage("heart1",heart1img);
    redHeart.velocityX=-2;
    redHeart.scale=0.45;


  }
}
function heart2(){
  if(frameCount%1000===0){
    redHeart2=createSprite(windowWidth/2+2000,Math.round(random(240,250)),10,10);
    redHeart2.addImage("heart",heart1img);
    redHeart2.velocityX=-2;
    redHeart2.scale=0.45;


  }
}
function heart3(){
  if(frameCount%1000===0){
    redHeart3=createSprite(windowWidth/2+800,Math.round(random(380,390)),10,10);
    redHeart3.addImage("heart1",heart1img);
    redHeart3.velocityX=-2;
    redHeart3.scale=0.45;


  }
}

