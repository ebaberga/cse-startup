function  setup(){
  createCanvas(1500,1000);
  background(80, 180, 205);

}
function draw(){
  cloud(100,200,70,100,PI,PI);
  cloud(150,200,70,180,PI,PI);
  cloud(200,200,80,150,PI,PI);
  cloud(250,200,120,100,PI,PI);
  cloud(400,150,70,100,PI,PI);
  cloud(450,150,70,180,PI,PI);
  cloud(500,150,80,150,PI,PI);
  hat(480,330,600,275,720,330);
  head_torso_mouth(600,580,400,500);
  head_torso_mouth(600,700,100,50);
  eye(520,480,80,40);
  eye(660,480,80,40);
  pupil(660,480,20,20);
  pupil(520,480,20,20);
  arm(400,580,330,630);
  arm(330,630,300,620);
  arm(330,630,300,640);
  arm(330,630,300,660);
  arm(800,580,870,630);
  arm(870,630,900,620);
  arm(870,630,900,640);
  arm(870,630,900,660);
}
function cloud(a,b,c,d,e,f){
  noStroke();
  fill(255);
  arc(a,b,c,d,e,f);
} 
function hat(a,b,c,d,e,f){
  if (keyIsPressed === true){
    noStroke();
    fill(random(255),random(255),random(255));
    triangle(a,b,c,d,e,f);
  } 
  }
function head_torso_mouth(a,b,c,d){
  
  if (keyIsPressed === true){
    ellipse(a,b,c,d);
    fill(random(255),random(255),random(255));
  } 
}
function pupil(a,b,c,d){
  fill(0);
  ellipse(a,b,c,d);
}
function eye(a,b,c,d){
  stroke(0);
  if (mouseIsPressed)
    fill(0);
  else
    fill(255);
  ellipse(a,b,c,d);
} 
function arm(a,b,c,d){
  fill(0);
  line(a,b,c,d);
}




