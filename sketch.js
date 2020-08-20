var movingRect, fixedRect, objectgame1, objectgame2;



function setup() {
  createCanvas(1200,800);
  movingRect =createSprite(400, 200, 80, 30);
  movingRect.shapeColor='green';
  movingRect.debug=true;
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor='green';
  fixedRect.debug=true;
  objectgame1 = createSprite(800,600,80,90);
  objectgame2 = createSprite(1000,800,100,30);
} 

function draw() {
  background(255,255,255); 
  objectgame1.x=World.mouseX;
  objectgame1.y=World.mouseY;
  
  if(istouching(objectgame1,objectgame2)){
    objectgame1.shapeColor='red';
    objectgame2.shapeColor='red';
  }
  else{
    objectgame1.shapeColor='green';
    objectgame2.shapeColor='green';
  }

  drawSprites();
}