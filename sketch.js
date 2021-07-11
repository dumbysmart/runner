var runner, running
var path
var right_bound
var left_bound

function preload(){
  //pre-load images
  
  path=loadImage("path.png")
  running=loadAnimation("Runner-1.png","Runner-2.png")
}


function setup(){
  createCanvas(400,400);
  //create sprites here
  bg=createSprite(200,200,400,400)
  bg.addImage("bg",path)
  
  bg.scale=1
  

  runner=createSprite(200,350,50,50)
  runner.addAnimation("runner",running)
  runner.scale=0.05

  right_bound=createSprite(375,200,50,400)
  right_bound.visible=false
  left_bound=createSprite(25,200,50,400)
  left_bound.visible=false
}

function draw() {
  background("blue");
  bg.velocityY=7
  if (bg.y>400) {
    bg.y=20
    }
    runner.x=World.mouseX
    runner.collide(right_bound)
    runner.collide(left_bound)
  drawSprites()
}
