var hr, min, sec;

function setup() {
  createCanvas(1000,800);
  
}

function draw() {
  background(0); 
  
  angleMode(DEGREES);

  hr = hour();
  min = minute();
  sec = second();

  hrAngle = map(hr%12,0,12,0,360);
  minAngle = map(min,0,60,8,360);
  secAngle = map(sec,0,60,0,360);

  translate(500,400);
  rotate(-90);

  fill("Purple");
  arc(0,0,540,540,hr*30,PI);
  fill("Black");
  arc(0,0,520,520,PI,PI)

  fill("Cyan");
  arc(0,0,520,520,min*6,PI);
  fill("Black");
  arc(0,0,500,500,PI,PI)

  fill("Red");
  arc(0,0,500,500,sec*6,PI);
  fill("Black");
  arc(0,0,480,480,PI,PI)

  //Creating the hour hand
  push();
  rotate(hrAngle);
  stroke("Purple");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //Creating the minute hand
  push(); 
  rotate(minAngle);
  stroke("Cyan");
  strokeWeight(7);
  line(0,0,150,0);
  pop();

  //Creating the seconds hand
  push();
  rotate(secAngle);
  stroke("Red");
  strokeWeight(7);
  line(0,0,190,0);
  pop();

  console.log(hr+" "+min+" "+sec);
  drawSprites();
}