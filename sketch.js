const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var Rain = []
var man,manImg;
function preload(){
  manImg = loadImage("man.png")  
}

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    // man = Bodies.rect(200,300,100,100)
  man = new Man()
}

function draw(){
    background("black")
      Engine.update(engine)
      var maxDrop = 25
      // image(manImg,200,300,100,100)
      for (var i = 0; i<maxDrop; i++){
        Rain.push(new rain(random(0,400),0))
      }
      for (var k = 0; k<Rain.length; k++){
        Rain[k].display();
      }  
      man.display();
}   

