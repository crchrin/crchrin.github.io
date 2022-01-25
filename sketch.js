
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
  line(0,(s*10),600,(s*10));
  stroke('white');
  strokeWeight(2);
  line(0,(m*10),600,(m*10));
  strokeWeight(3);
  line(0,(h*25),600,(h*25));
}
