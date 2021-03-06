
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	,paperObj;
var world,engine;
var render;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin (1250,650);
    paperObj = new paper(150,400,20);
   // render = Render.create({
	//	element : document.body,
	//	engine:engine,
	//	options:{
		//	width:1600,
		//	height:300,
	//		wireFrames:true
		//}
	//})
	Engine.run(engine);
   //Render.run(render);
}


function draw() {
  
  background(230);
 
  Engine.update(engine);


  groundObject.display();
  dustbinObj.display();
  paperObj.display();

}
function keyPressed(){
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:105,y:-90});
	} 
}
