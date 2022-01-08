const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var boton1,boton2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  boton1=createImg('right.png');
boton1.position(200,30);
boton1.size(50,50);
boton1.mouseClicked(hforce);

boton2=createImg('up.png');
boton2.position(30,60);
boton2.size(50,50);
boton2.mouseClicked(vforce);
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 var options={
   restitution:0.95
 }
 ball = Bodies.circle(200,100,20,options);
 World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);

}

function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}