var ship,piship
//var gameState="First"
var gameState="START"
var  pirateLeftGroup

function preload(){
     back=loadImage("images/background.jpg")
     sim=loadImage("images/ship.png")
     psim=loadImage("images/pirateship.png")
     cannon=loadImage("images/can.png")
     cannon2=loadImage("images/canno.png")
     po=loadImage("images/po.png")
     po1=loadImage("images/pol.png")
     po2=loadImage("images/police.png")
     pirateImg=loadImage("images/pir.png")
     cball=loadImage("images/ball.png")
     bu=loadImage("images/bullet.png")
     pirShipPir=loadImage("images/pir left.png")
}

function setup(){
    createCanvas(1700,700)
    //policehShip
    ship=createSprite(670,470,20,20)
    ship.addImage(sim)
    ship.scale=0.8
    //pirateship
    piship=createSprite(1470,400,20,20)
  
    piship.scale=0.7
    piship.velocityY=-2
    piship.addImage(psim)
    piship.debug=true;

    canIsland=createSprite(290,335,40,40)
    canIsland.addImage(cannon)
    canIsland.scale=0.3
   
    canShip=createSprite(1360,480,40,40)
    canShip.addImage(cannon2)
    canShip.scale=0.3

    police=createSprite(805,450,40,40)
    police.addImage(po)
    police.scale=0.3

    police1=createSprite(670,400,40,40)
    police1.addImage(po1)
    police1.scale=0.3

    police2=createSprite(535,440,40,40)
    police2.addImage(po2)
    police2.scale=0.4

    pirate=createSprite(150,320,40,40)
    pirate.addImage(pirateImg)
    pirate.scale=0.8

    pirate2=createSprite(1590,410,40,40)
    pirate2.addImage( pirShipPir)
    pirate2.scale=0.8

    //form=new Form()
    //form.instructionScreen()
    pirateRightGroup=new Group()
    pirateLeftGroup=new Group()
    policeGroup=new Group()
    policeGroup.add(police1)
    policeGroup.add(police2)
    policeGroup.add(police)

    inviGroundBottom=createSprite(1425,690,200,20)
    inviGroundTop=createSprite(1428,140,200,20)

    button=createButton("LASER")
    button.position(1030,50)

    
}


function draw(){
    background("white")
    if(gameState==="START") {
    background(back)
    textSize(20)
    text("x"+mouseX+"y"+mouseY,mouseX,mouseY)
 
  piship.bounceOff(inviGroundBottom)
  piship.bounceOff(inviGroundTop)
  //moving policehShip
    if(keyDown(UP_ARROW)&&ship.y>=350){
        ship.y=ship.y-5
    }
    if(keyDown(DOWN_ARROW)&&ship.y<=580){
        ship.y=ship.y+5
    }

    if(keyDown(RIGHT_ARROW)&&ship.x<=1000){
        ship.x=ship.x+5
    }

     if(keyDown(LEFT_ARROW)&&ship.x>=550){
        ship.x=ship.x-5
    }
 //move cannon and pirate with pirateship

  canShip.x=piship.x
  canShip.y=piship.y 
  pirate2.x=piship.x
 pirate2.y=piship.y 

  

    //move police with ship
    police1.x=ship.x+50
    police1.y=ship.y-120

    police2.x=ship.x-110
    police2.y=ship.y-90

    police.x=ship.x+135
    police.y=ship.y-80

    pirateLeftBulletCannon() 
    pirateRightBulletCannon()

//Collision beween pirate and police
pirateLeftGroup.overlap(policeGroup,function(pi,po){
po.remove()
})
pirateRightGroup.overlap(policeGroup,function(pi,po){
    po.remove()
    })

    //collision between police and pirate using xyz keys-->Armaan

button.mousePressed(()=>{
    console.log("Buttn pressed")
})

drawSprites()
    }
}


function pirateLeftBulletCannon() {
    if (frameCount % 60 === 0) {
        //left bullet
        bullet = createSprite(200,275,40,10);
        bullet.addImage(bu);
        bullet.scale = 0.1;
        bullet.velocityX = 7;
        bullet.lifetime = 240;
        pirateLeftGroup.add(bullet)
    }
        if (frameCount % 200 === 0) {
        //cannon left
      cannonBall = createSprite(350,300,40,10);
      cannonBall.addImage(cball);
      cannonBall.scale = 0.2;
      cannonBall.velocityX = 4;
      cannonBall.lifetime = 240;
      pirateLeftGroup.add(cannonBall)
     
      }
    }
      
    function pirateRightBulletCannon() {
        if (frameCount % 60 === 0) {
            //Right bullet
            bullet2 = createSprite(1550,365,40,10);
            bullet2.addImage(bu);
            bullet2.scale = 0.1;
            bullet2.velocityX = -7;
            bullet2.lifetime = 240;
            pirateRightGroup.add(bullet2)
        }
            if (frameCount % 200 === 0) {
            //Right left
          cannonBall2 = createSprite(1295,455,40,10);
          cannonBall2.addImage(cball);
          cannonBall2.scale = 0.1;
          cannonBall2.velocityX = -4;
          cannonBall2.lifetime = 240;
          pirateRightGroup.add(cannonBall2)
         
          }
        }

//form with instructions
//xyz keys-
//collision between police and pirate using xyz keys-->Armaan
//right bullet has to be reversed
//th top and bottom gnds invisible


//gameEnd condition ->

//button -police bullet will change to laser bullet -SARU
//life and score

//cannon ball touching police - die- 1 life
//bullet touching police - die after 3 bullets

//police bullet touch pirate only once -pirate dies

