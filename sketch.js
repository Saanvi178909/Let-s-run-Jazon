  var Path, boy, leftBoundary, RightBoundary
  var PathImg, boyImg
  function preload(){
    //pre-load images
  PathImg=loadImage("path.png");
  boyImg=loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
    createCanvas(400,400);
    //create sprites here
  Path=createSprite(200,200);
  Path.velocityY = 4;
  Path.scale=1.2;
    boy=createSprite(200,200);
  boy=addAnimation("Jake running", boyImg);

  leftBoundary=createSprite(0,0,100,600);
  leftBoundary.visible = false;

  RightBoundary=createSprite(410,0,100,800);
  RightBoundary.visible = false;

}

function draw() {
   background(0);
   path.velocityY = 4;
   draw(mouseX);
   boy.x = World.mouseX;
  
   boy.collide(leftBoundary);
   boy.collide(rightBoundary);

  if(path.y > 400 ){
    path.y = height/2;
}

drawSprites();
}
