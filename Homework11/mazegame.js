/* Variables */
var circleX = 200;
var circleY = 25;


/* Maze Setup */

function setup() {
    createCanvas(400,400);
  }

  function draw() {
    background(220);
    fill(255,0,0)
    stroke(5)
    rect(200, 390, 25, 75);
    fill(0)
    text('Exit', 200, 390);

    /* Maze Guides */
    line(75, 75, 325, 75)
    line(150, 75, 150, 150)
    line(325, 75, 325, 150)
    line(0, 150, 150, 150)
    line(250, 150, 250, 225)
    line(75, 225, 300, 225)
    line(75, 225, 75, 325)
    line(300, 225, 300, 400)
    line(75, 225, 75, 325)
    line(150, 325, 225, 325)
    line(150, 325, 150, 400)

    /* Character/Movement */
  
  if(keyIsDown(68)) /*87 - W , 83 - S, 68 - D, 65 - A*/
  {
      circleX+=0.75;
  }
  if(keyIsDown(65))
  {
      circleX-=0.75;
  }
  if(keyIsDown(87))
  {
      circleY-=1;
  }
  if(keyIsDown(83))
  {
      circleY+=0.75;
  }
  fill(0,255,0)
  circle(circleX,circleY,10);

  /* "Get to Exit"/"You Win" Text  */
  if( (circleY <= 400 && circleY >= 375) && (CircleX >= 150 && CircleX <= 250))
  {
    fill(0)
    text('You Win', 25, 15);
  }
  else
  {
    fill(0)
    text('Get To The Exit! (Use WASD to move)', 25, 15);
  }

  }