var bananaimage, obstacleimage, obstaclesGroup, score, foodgroup;


function preload(){
  
  backimage=loadImage("jungle.jpg");
  
  player_running=loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png", "Monkey_04.png","Monkey_05.png", "Monkey_06.png", "Monkey_07.png","Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaimage = loadImage("banana.png");
  
  obstacle_img = loadImage("stone.png");
  
 
}


function setup() {
  createCanvas(400, 400);
  
  bg = createSprite(200,200,400,400);
  bg.addImage("backgroundI", backimage);
  bg.x = bg.width /2;
  bg.velocityX = -4;
  
  player = createSprite(50,350,10,10);
  player.addAnimation("run",player_running);
  player.scale=0.15;
  
  foodgroup = new Group();
  obstaclesGroup = new Group();
  
  iGround=createSprite(200,370,400,10);
  iGround.visible=false;
  
  score= 0;
  
}

function draw() {
  background(220);
  
 
  
  if(keyDown("space")){
    player.velocityY=-12;
  }
  player.velocityY=player.velocityY+1;
    if (bg.x < 0){
    bg.x = bg.width/2;
  }
switch(score){
  case 10: player.scale=0.12;
  case 20: player.scale=0.14;
  case 30: player.scale=0.16;
  case 40: player.scale=0.18;
    break;
    default: break;
}
  
  if(foodgroup.isTouching(player)){
    score = score + 1;
    foodgroup.destroyEach();
  }
  
  if(obstaclesGroup.isTouching(player)){
    player.scale=0.1;
  }
     player.collide(iGround);
  spawnfruits();
  spawnObstacles();
  drawSprites();
    text("score:"+ score, 200,50);
}

function spawnfruits (){
    if(frameCount % 60 === 0) {
    var fruit = createSprite(400,165,10,40);
       fruit.y = Math.round(random(80,300));
      fruit.addImage(bananaimage);
      fruit.scale=0.06
    fruit.velocityX = -4;
      foodgroup.add(fruit);
        //  bg.depth = fruit.depth;
   // fruit.depth = bg.depth + 1;

    }
}

function spawnObstacles() {
  if(frameCount % 80 === 0) {
    var obstacle = createSprite(600,165,10,40);
        obstacle.y = Math.round(random(80,250));
    obstacle.velocityX = -4;
    obstacle.addImage(obstacle_img);
obstacle.scale = 0.1
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}