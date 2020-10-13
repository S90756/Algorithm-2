var fixedRect, movingRect,obj1,obj2,obj3,obj4,obj5;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red"
  movingRect=createSprite(500,200,50,100);
  movingRect.shapeColor="red"
  fixedRect.debug=true
  movingRect.debug=true
  obj1=createSprite(600,400,50,50);
  obj2=createSprite(200,400,50,50);
  obj3=createSprite(300,400,50,50);
  obj4=createSprite(500,100,50,50);
  obj5=createSprite(500,300,50,50);
  /*fixedRect.velocityX=0.6
  fixedRect.velocityY=0.8
  movingRect.velocityX=-0.6
  movingRect.velocityY=0.8*/
  obj2.velocityX=2
  obj3.velocityX=-2
  obj4.velocityY=4
  obj5.velocityY=-4
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(obj1,movingRect)){
      obj1.shapeColor="blue"
      movingRect.shapeColor="blue"
  }else{
    obj1.shapeColor="red"
      movingRect.shapeColor="red"
  }
bounceOff(obj2,obj3)
bounceOff(obj4,obj5)


    
  drawSprites();
}
