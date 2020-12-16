const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var engine,world;
var ground, tree, stone, boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var launcher;
var launchingForce = 100;

function preload(){
	boy = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	stone = new Stone(235,330,30)
	
	mango1=new Mango(1000,50,30);
	mango2=new Mango(1070,130,30);
	mango3=new Mango(910,80,30);
	mango4=new Mango(775,150,30);
	mango5=new Mango(1000,125,30);
	mango6=new Mango(1050,190,30);
	mango7=new Mango(850,180,40);
  mango8=new Mango(1140,180,40);
	mango9=new Mango(940,190,40);
	
	ground = new Ground(600,500,width,50)
	tree = new Tree(475,125,500,500)
	
	launcher=new Launcher(stone.body,{x:200,y:330})

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 500,
		  wireframes: false
		}
	  });


	Engine.run(engine);
  
}


function draw() {
  
  background(209, 255, 245);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy,150,250,200,300);

  ground.display();
  tree.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  stone.display();
  launcher.display();

  

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
}

function keyPressed() {
if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:200, y:330}) 
    launcher.attach(stone.body);
  }
}
function detectcollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}
