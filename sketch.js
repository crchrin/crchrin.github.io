
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(214, 80, 118);
  let s = second();
  let m = minute();
  let h = hour();
  console.log(m);
  line(0,(s*10),600,(s*10));
  stroke(188,152,156);
  line(0,(s*10),600,(s*10));
  strokeWeight(1);
  line(0,(s*10),600,(s*10));
  stroke(188,152,156);
  strokeWeight(4);
  line(0,(m*10),600,(m*10));
  strokeWeight(8);
  line(0,(h*25),600,(h*25));
  stroke("white");
  strokeWeight(1);
  line(0,0,10,0);
  line(0,300,20,300);
  line(0,150,20,150);
  line(0,450,20,450);
  line(0,600,20,600);
  line(0,75,10,75);
  line(0,225,10,225);
  line(0,375,10,375);
  line(0,525,10,525);
  line(0,600,10,600);

}
