const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions =[];

var divisionsHeight=300;
function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,480,20);
}

function draw() {
  background(255,255,255);
  
  
  ground.display();

  for(var j=0; j<particles.length; j++){
    particles[j]. display();
  }
  for(var k=0; k<divisions.length; k++){
    divisions[k]. display();
  }
  
  drawSprites();
}