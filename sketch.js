var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(600,400,150,200);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  console.log(movingRect.x-fixedRect.x);
}


function draw() {
  background(255,255,255);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY; 
  if((movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2)
   && (fixedRect.x-movingRect.x <movingRect.width/2+fixedRect.width/2 )) {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
    
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  drawSprites();
}