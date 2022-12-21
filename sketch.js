
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola, quadrado, retanglo;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
bola = Bodies.circle(300,30,40)
	World.add(world,bola);
 
	
	var options = {
		isStatic: false
	}
	
	
	retanglo = Bodies.rectangle(200,10,60,30, options)
	World.add(world,retanglo)
	
	quadrado = Bodies.rectangle(600,10,40,40, options)
	World.add(world,quadrado)




}


function draw() {
  rectMode(CENTER);
  background(0);
  
	Engine.update(engine)
	
	
	fill("white")
	ellipse(bola.position.x,bola.position.y,40,40)

	fill("red")
	rect(retanglo.position.x, retanglo.position.y, 60, 30)
  
	fill("blue")
	rect(quadrado.position.x, quadrado.position.y, 40, 40)
	
	
	
	drawSprites();
 
}



