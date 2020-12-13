
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundSprite;
var box1, box2, box3;
var paper;
var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	paper= createSprite(100,660,)
	paper.shapeColor=color(255,0,0);
	paper.isStatic=false;

	box1=createSprite(500,660,100,20);
	box1.shapeColor=color(255,0,0);
	box1.isStatic=true;

	box2=createSprite(450,620,20,100);
	box2.shapeColor=color(255,0,0);
	box2.isStatic=true;

	box3=createSprite(550,620,20,100);
	box3.shapeColor=color(255,0,0);
	box3.isStatic=true;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
if(keyCode === UP_ARROW){
	Matter.Body.applyforce(paperObject.body.paperObject.body.position,{x:85,y:-85}); 
}

  groundSprite=createSprite(width/2, height-35, width,10);
  groundSprite.shapeColor=color(255)

  drawSprites();
 paper.display();
 groundSprite.display();
}




