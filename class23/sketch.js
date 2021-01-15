const Engine = Matter .Engine
const World = Matter .World
const Bodies = Matter .Bodies

var engine, world, obj1, obj2;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  var obj1options={
    isStatic:true
  }

  obj1 = Bodies.rectangle(10,390,900,10,obj1options);
  World . add(world,obj1);
  console.log(obj1);

  obj2 = Bodies.rectangle(300,100,50,50)
  World . add(world,obj2);

}

function draw() {
  background("pink"); 
  Engine.update(engine);
  rect(obj1.position.x,obj1.position.y,50,50) ;
  rect(obj2.position.x,obj2.position.y,50,50)

}