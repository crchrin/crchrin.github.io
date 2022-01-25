
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(214, 80, 118);
  let s = second();
  let m = minute();
  let h = hour();
  console.log(m);
  strokeWeight(1);
  stroke('white');
  line(0,(s*10),600,(s*10));
  stroke('white');
  strokeWeight(2);
  line(0,(m*10),600,(m*10));
  stroke('white');
  strokeWeight(4);
  line(0,(h*25),600,(h*25));
  stroke(136, 14, 79);
  strokeWeight(4);
  line(0,0,40,0);
  line(0,75,20,75);
  line(0,150,40,150);
  line(0,225,20,225);
  line(0,300,40,300);
  line(0,375,20,375);
  line(0,450,40,450);
  line(0,525,20,525);
  line(0,600,40,600);
  line(560,0,600,0);
  line(580,150,600,150);
  line(560,300,600,300);
  line(580,450,600,450);
  line(560,600,600,600);
}
