const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj;
var binImage;
var groundObject;
var world;
var paperObj;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	paperObj = new Paper(500,400,65);
	groundObject = new Ground(width/2,670,width,20);
	dustbinObj = new Dustbin(1200,650);
	binImage = new img(1180,510);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 0,
		  height: 0,
		  wireframes: false
		}
	   });

	Engine.run(engine);
	Render.run(render);
  
}

function draw() {
  rectMode(CENTER);
  background(230);

  paperObj.display();
  groundObject.display();
  dustbinObj.display();
  binImage.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
  
	  Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:530,y:-545});
  
	 
	}
}