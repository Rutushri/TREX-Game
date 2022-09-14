
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  ground=createSprite(200,180,400,20)
  ground.x=ground.width/2;
  ground.addImage("ground",groundImage);
  //create a trex sprite
 trex=createSprite(80,160,10,40)
  trex.addAnimation("running",trex_running)
  trex.scale=0.7
  edges=createEdgeSprites()
}

function draw(){
  background("white")
    if(keyDown("space")){
    trex.velocityY=-10 
     ground.x=ground.width/2;
    }
    if(ground.x<0){


    }
    ground.velocityX=-2;
    trex.velocityY=trex.velocityY+0.5
    trex.collide(ground)
       drawSprites()

}