var canvas,bg;
var together
var tom, tomImg1, tomImg2;
var jerry, jerryImg1, jerryImg2 ;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/cat1.png");
    tomImg2= loadAnimation("images/cat2.png");
    tomImg3= loadAnimation("images/cat3.png");
    jerryImg1= loadAnimation("images/mouse1.png");
    jerryImg2= loadAnimation("images/mouse2.png");
    jerryImg3= loadAnimation("images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    
    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;
}

function draw() {

    background(bg);

    if(tomk.x - jerry.x < (tom.widht - jerry.widthy)/2)
    {
        tom.velocityx=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", tomImg3);
        jerry.scale = 0.15;
        jerry.changeAnimation("jerryLastImage")
    }
   

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      tom.velocityx = -5;
      tom.addAnimation("tomRunning", tomImg2);
      tom .changeAnimation("tomRunning");

      jerry.addAnimation("jerryTeasing", jerryImg2);
      jerry.frameDelay = 25;
      jerry.changeAnimation("jerryTeasing");
  }


}
