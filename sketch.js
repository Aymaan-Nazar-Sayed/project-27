
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var rope1,rope2,rope3,rope4,rope5;
var roofObject1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject1= new Roof(400,200,250,20)
	bobObject1= new Bob(400,500,25)
	bobObject2= new Bob(405,500,25)
	bobObject3= new Bob(410,500,25)
	bobObject4= new Bob(415,500,25)
	bobObject5= new Bob(420,500,25)

	rope1 = new Chain(bobObject1.body,roofObject1.body,-80,0) 
	rope2 = new Chain(bobObject2.body,roofObject1.body,-40,0) 
	rope3 = new Chain(bobObject3.body,roofObject1.body,0,0) 
	rope4 = new Chain(bobObject4.body,roofObject1.body,40,0) 
	rope5 = new Chain(bobObject5.body,roofObject1.body,80,0) 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  roofObject1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  
  
  
 
}



