var bgImg;
var cat,catImg1,catImg2,catImg3,catImg4;
var mouse,mouseImg1,mouseImg3,mouseImg4;


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    mouseImg1 = loadImage("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg4 = loadImage("images/cat4.png");
    mouseImg4 = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(windowWidth,windowHeight);
    //create tom and jerry sprites here

    garden = createSprite(width/2,height/2);
    garden.addImage(bgImg);

    cat = createSprite(width/2+200,height/2+200);
    cat.addImage(catImg1);
    cat.scale = 0.15;

    mouse = createSprite(width/2-300,height/2+200);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.10;
}

function draw() {

    background("bgImg");
    //Write condition here to evalute if tom and jerry collide

   if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    cat.velocityX = -2;
    }
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catRunning",catImg4);
        cat.changeAnimation("catRunning");
        cat.velocityX = 0;
        mouse.addAnimation("mouseTeasing",mouseImg4);
        mouse.changeAnimation("mouseTeasing");
        }
   
    
    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 15;
  }


}
