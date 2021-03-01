const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var drops = [];
var maxDrops = 100;
var umbrella;
var rand;
var night;
var Thunder , thunder1,thunder2,thunder3,thunder4;
var thunderCreatedFrame = 0;

function preload(){
    night = loadImage("image/rainynight.jpg")
    thunder1 = loadImage("image/thunderbolt/1.jpg")
    thunder2 = loadImage("image/thunderbolt/2.jpg")
    thunder3 = loadImage("image/thunderbolt/3.jpg")
    thunder4 = loadImage("image/thunderbolt/4.jpg")
    
    
}

function setup(){
   var canvas = createCanvas(500,700);

   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,500);

   for( i = 0; i < maxDrops;i++){
       drops.push(new createDrops(random(0,500),random(0,500)));
   }
}

function draw(){
    Engine.update(engine);
    background(night);

    rand = Math.round(random(1,4));
    thunderCreatedFrame = frameCount;
    Thunder = createSprites(random(10,370),random(10,30),10,10)
    switch(rand){
        case 1:Thunder.addImage(thunder1);
        break;
        case 1:Thunder.addImage(thunder2);
        break;
        case 1:Thunder.addImage(thunder3);
        break;
        case 1:Thunder.addImage(thunder4);
        break;
        default:break;
    }
    Thunder.scale = 0,7;
}   
if(thunderCreatedFrame + 10 === frameCount && Thunder){
    Thunder.destroy();
}
umbrella.display();

for(var i = 0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
} 
drawSprites();
