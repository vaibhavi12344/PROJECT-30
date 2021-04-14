
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobDiameter=40;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	roof=new Roof(400,100,700,20)
	bobObject1=new Bob(50,200,20)
	bobObject2=new Bob(90,200,20)
	bobObject3=new Bob(130,200,20)
	bobObject4=new Bob(170,200,20)
	bobObject5=new Bob(210,200,20)
	
  rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0)
  rope2=new Rope(bobObject2.body,roof.body,-bobDiameter*2,0)
  rope3=new Rope(bobObject3.body,roof.body,-bobDiameter*2,0)
  rope4=new Rope(bobObject4.body,roof.body,-bobDiameter*2,0)
  rope5=new Rope(bobObject5.body,roof.body,-bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
   bobObject1.display();
   bobObject2.display();
   bobObject3.display();
   bobObject4.display();
   bobObject5.display();
   roof.display();
 
}



