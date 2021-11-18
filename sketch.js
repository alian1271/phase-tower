var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}



function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();

  ghost = createSprite(200,200,50,50)
  ghost.scale = 0.4
  ghost.addImage(ghostImg)
}

function draw() {
  background(200);

  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY = 0;
  }
  
if(keyDown("right_arrow")){
  ghost.x = ghost.x + 3;
}
else  if(keyDown("left_arrow")){
ghost.x= ghost.x  - 3;

}

 if(keyDown("space")){
    ghost.velocityY = -10;
  }
  
  ghost.velocityY = ghost.velocityY + 0.8


  spawndoors();
  if(tower.y > 400){
      tower.y = 300
    }
    drawSprites();
}

function spawndoors(){
  if (frameCount % 250 === 0) {
    door = createSprite( 200,54);
    climber=createSprite(door.x,door.y+50)
    door.x = Math.round(random(120,400));
    climber.x=door.x
    door.addImage(doorImg);
    climber.addImage(climberImg)
    door.scale=1;
    doorsGroup.add(door);
    climbersGroup.add(climber);
    climber.scale= 1;
           door.velocityY = 1;
          climber.velocityY = 1;
           ghost.depth = door.depth
           ghost.depth = ghost.depth + 1
    }


    
   





  
}
