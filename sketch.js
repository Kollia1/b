var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,thickness,height/2)
  speed=random(55,90)
  weight=random(400,150)

  wall.shapeColor=color(80,80,80)
}

function draw() {

  background(0);
  bullet.velocityX=speed;
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.chapeColor=color(255,0,0)
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }
  
  drawSprites();
}

function hasCollided(bullet1,wall1){
  bulletRightEdge=bullet1.x+bullet1.width;
  wallLeftEdge=wall1.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}

