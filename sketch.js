
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5;
var stone;
var boy, boyIMG;
var tree, treeIMG;
var chain;
var ground;



function preload()
{
	boyIMG = loadImage("boy.png");
	treeIMG = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = new Boy(150,580,20,20);
	boy.scale = 0.13;

	
	tree = new Tree(700,450,20,20);
	tree.scale = 0.3;

	mango1 = new Mango(600,460,20);
	mango2 = new Mango(600,350,20);
	mango3 = new Mango(740,280,20);
	mango4 = new Mango(650,300,20);
	mango5 = new Mango(750,450,20);

	stone = new Stone(90,500,15);

	
	ground = new Ground(10,650,1800,20);

	chain = new Chain(boy.body, stone.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  boy.display();

  tree.display();

  stone.display();

  chain.display();

  ground.display();
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(boy.body, stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
    chain.fly(); 
}

