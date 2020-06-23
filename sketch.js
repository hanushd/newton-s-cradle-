var ground;
var bob1,bob2,bob3,bob4,bob5;
var rope;
var roof1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(400,400);


	engine = Engine.create();
	world = engine.world;


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 bob1 = new Bob (300,60,20)
	 bob2 = new Bob (280,55,20)
	 bob3 = new Bob (260,50,20)
	 bob4 = new Bob (240,45,20)
	 bob5 = new Bob (220,40,20)
	                                 
rope = new rope (bob1.body,bob2.body,bob3.body,bob4.body,bob5.body,roof.body,
		-bob1Diameter*2,0,-bob2Diameter*2,0,-bob3Diameter*2,0,-bob4Diameter*2,0,
		-bob5Diameter*2,0)

	Engine.run(engine);
  

function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();
  
  drawSprites();

}
}