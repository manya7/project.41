const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas;
var drop=[];
var maxDrops=150;
var umbrella;
var thunder,thunder_img;

function preload(){
    thunder_img=loadImage("thunderbolt/1.png")

}

function setup(){
    engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
    
    canvas = createCanvas(400,700);
   

    
      for (var e = 0; e <maxDrops; e++) 
      {
      
        drop.push(new Drop(random(0,400),random(0,400)));
      }
umbrella=new Umbrella(200,500)
  
}

function draw(){
    background("black")

    for (var i = 0; i <maxDrops; i++) {
      drop[i].display();
         
       }
    
if(frameCount%60===0){

  thunder=createSprite(200,150,10,10)
thunder.addImage("thunder",thunder_img);
thunder.scale=0.5;
drawSprites();
    }

  //Drop.update()
       
        

         umbrella.display();

         
}   

