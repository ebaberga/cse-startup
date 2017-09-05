var monster_img;
var cookie_img;
var cake_img;
var pie_img;
var points;
var missed; 
var monster_x, monster_y;
var cookie_x, cookie_y;
var pie_x, pie_y;
var cake_x, cake_y;
var osc; 
 


function preload() {
  monster_img = loadImage("assets/cookie_monster.png");
  cookie_img = loadImage("assets/cookie.png");
  cake_img = loadImage("assets/cake.png");
  pie_img = loadImage("assets/pie.png");

}

function setup() {
  createCanvas(720, 400);
  monster_x = 150
  monster_y = height-150;
  cookie_x = 725;
  cookie_y = random(350);
  pie_x = random(2000); 
  pie_y = random(400);
  cake_x = random(2000); 
  cake_y = random(400);
  osc = new p5.Noise('brown'); 
  osc.amp(0);
  osc.start();


  points = 0;
  missed = 0;
}

function draw() {
  background(200);
  displayPoints(); 
  displayMissed();
  
  image(monster_img, monster_x, monster_y);
  image(cookie_img, cookie_x, cookie_y);
  image(pie_img, pie_x, pie_y);
  image(cake_img, cake_x, cake_y);

  
  moveCookie();
  movePie();
  moveCake();
  moveMonster();
  checkForChomp();
  if (missed >= 3){
    textSize(60);
    fill(255, 0, 0);
    cookie_x=0;
    cookie_y=175;
    pie_x=0;
    pie_y=250;
    cake_x = 0;
    cake_y = 320;
    osc.amp(0.5, 0.05); // sound 
    text("GAME OVER", 300, 200);
  }
  if (pie_y == cake_y || pie_y == cookie_y){ // prevents from overlapping 
    pie_y=random(400);
    cookie_y=random(350);
    cake_y=random(400);
    
  }
  
}

function displayPoints() {
  fill(0,0,255);
  textSize(30);
  text("points: "+ points,10,50);
}
function displayMissed(){
  fill(255,0,0);
  textSize(30);
  text("missed: "+ missed,170,50);
}

function moveCookie() {
  if(cookie_x < 0) {
    cookie_x = 725;
    cookie_y = random(350);
    missed+=1;
  }
  else 
    cookie_x -= 5;//move to the left by 5 points 
}
function moveCake() {
  if(cake_x < 0) {
    cake_x = random(2000);
    cake_y = random(400);
  }
  else 
    cake_x -= 5;//move to the left by 5 points 
}
function movePie() {
  if(pie_x < 0) {
    pie_x = random(2000);
    pie_y = random(400);
  }
  else 
    pie_x -= 5 ;//move to the left by 5 points 
}


function moveMonster() {
  if(keyIsDown(UP_ARROW) && monster_y > 0)
    monster_y -= 2;//move_up by two points 
  if(keyIsDown(DOWN_ARROW) && monster_y < height-150)
    monster_y += 2;//move_down by two points
  if(keyIsDown(LEFT_ARROW) && monster_x >0) 
    monster_x -=2;
  if(keyIsDown(RIGHT_ARROW) && monster_x < 725-150) 
    monster_x +=2;  
}

function checkForChomp() {
  var cookie = dist(cookie_x, cookie_y, monster_x, monster_y);//dis calculates the distance between two points 
  var cake = dist(cookie_x, cookie_y, monster_x, monster_y);
  var pie = dist(cookie_x, cookie_y, monster_x, monster_y);
  if (cookie< 100) {
    points += 1;
    cookie_x = 725;
    cookie_y = random(350);
    cookie -= 5+ points;
  } 
  if (cake < 100){
    missed+=1;
    cake_x= random(2000);
    cake_y=random(350);
  }
  if (pie < 100){
    missed +=1;
    pie_x=random(2000);
    pie_y=random(350);
  }
}
