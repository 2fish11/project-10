var trex, trex_running
var ground, groundImage

function preload() {

  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

groundImage = loadImage("ground2.png");

}

function setup(){ 

createCanvas(600, 200);
trex = createSprite (50, 160, 20, 50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;

ground = createSprite(300, 180, 600, 20);
ground.addImage(groundImage);

}

function draw() {

  background("white");
  if (keyDown("SPACE")) {
    trex.velocityY = -5;
  }
  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(ground);
  
  ground.velocityX = -2;
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
drawSprites()

}