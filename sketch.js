var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var dustbin1,dustbin2,dustbin3;
var launcher1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var DustbinImage;
function preload()
{
	DustbinImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	paper= new Paper(200,100);
	ground=new Ground(width/2,670,width,20)
	dustbin1=new Dustbin(1000,600,30,140);
    dustbin2=new Dustbin(800,600,30,140);
	dustbin3=new Dustbin(890,650,200,30);
	launcher1 = new Launcher(paper.body,{x:200 ,y:100});
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(255);
  //dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  ground.display();
  launcher1.display();
  paper.display();
  imageMode(CENTER)
  image(DustbinImage,890,550,200,200);
  //drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    launcher1.fly()
}

