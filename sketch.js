var wall;
var speed;
var weight;
var bullet;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 10);
  speed=random(55,90);
  bullet.velocityX=speed;
  weight=random(400,1500);
  thickness=random(22,83);
  wall=createSprite(1500,200,thickness,height/2);
}

function draw() {
  background("black");  
  if (hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage= 0.5* weight* speed* speed/(thickness* thickness* thickness)
  if(damage>10){
    wall.shapeColor=color(255,0,0)
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0)
  }
}
  drawSprites();
}
function hasCollided(object1,object2){
 object1RightEdge=object1.x+object1.width;
  object2LeftEdge=object2.x;
 if(object1RightEdge>=object2LeftEdge){
   return true;
}
  return false;
}