var shipImg, shipImg1;
var sea, seaImg;


function preload(){
 seaImg = loadImage("sea.png");
 shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(1000,600);

 sea = createSprite(200, 200, 10, 10);
 sea.addImage("sea", seaImg);
 sea.velocityX = -10;
 sea.x = sea.width /2;
 

 shipImg = createSprite(150, 400, 60, 40);
 shipImg.addAnimation("navegando", shipImg1);
 shipImg.scale = 0.2;
}

function draw() {
  background("blue");

  if (sea.x < 0) {
    sea.x = sea.width /2;
  }

 drawSprites();
}