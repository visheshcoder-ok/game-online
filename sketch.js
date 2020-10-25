var back,backI;
var monkey,monkeyI;
var invisible;
var platform1;
var obstacle;
var stars;
var obstacleI;
var starsI;
var r,r2;
var obstacleG,starG;
var gameState = play;
var play = 1;
var end = 0;
var score = 0;
var star_s = 0;

function preload(){
  
  backI = loadImage("back1.jpg");
  ballI = loadImage("red ball.png");
  enemy1I = loadImage("enemy1.png");
  enemy2I = loadImage("enemy2.png");
  enemy3I = loadImage("enemy3.png");
  enemy4I = loadImage("enemy4.png");
  enemy5I = loadImage("enemy5.png"); 
  obstacleI = loadImage("obstacle1.png");
  obstacle2I = loadImage("obstacle2.png")
  platform1I = loadImage("plateform1.png");
  platform2I = loadImage("plateform2.png");
  starsI = loadImage("star.png");
}

function setup() {
  createCanvas(500,280);
  
  back = createSprite(300,140,600,450);
  back.addImage(backI);
  back.velocityX = -4;
 
  
  
  monkey = createSprite(70,100,20,20);
  monkey.addImage(ballI);
  monkey.scale = 0.11;
  monkey.rotationSpeed = 7;
  
  invisible = createSprite(300,250,600,1);
  invisible.visible = false;
  

  //ball.debug = true;
  monkey.setCollider("circle");
  

  obstacleG = new Group();
  starG = new Group();
}

function draw() {
  background(120);
  
  if(back.x<0){
     back.x = back.width/2
  }
   
 if(keyDown("space")||mousePressedOver(back)) {
        monkey.velocityY = -15;
    }
  
   monkey.velocityY = monkey.velocityY+0.7;
  
  if(monkey.isTouching(obstacleG)){
     gameState = end;
  }
  
  if(gameState === end){
     
  }
  
  if(monkey.isTouching(starG)){
     star_s = star_s + 1;
     starG.destroyEach();
  }
  
  monkey.collide(invisible);
 
  if(frameCount % 5 === 0){
     score = score + 1
  }
  
  spawnObstacle();
  spawnStars();
  
  drawSprites();
  
  fill("black");
  textSize(15);
  text("score:" + score,300,50);
  text("stars:" + star_s,400,50 )
}


function spawnObstacle(){
  if(frameCount % 230 === 0){
     obstacle = createSprite(270,200,10,10);
     obstacle.addImage(obstacleI);
     obstacle.scale = 0.5;
     obstacle.x = 600;
     obstacle.y = Math.round(random(15,300));
     obstacle.rotationSpeed = -14
     obstacle.velocityX = -9
  }
}  
 
function spawnStars(){
  if(frameCount % 120 === 0){
     star = createSprite(600,200,10,10);
     star.addImage(starsI);
     star.scale = 0.12;
     star.y = Math.round(random(80,260));
     star.velocityX = -4;  
    
     starG.add(star);
  }
}




