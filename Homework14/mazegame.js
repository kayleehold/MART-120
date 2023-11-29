/* Variables */
var circleX = 200;
var circleY = 25;

/* Array Variables */
var myXupperleft = [];
var myYupperleft = [];
var mywidth = [];
var myheight = [];

/* Maze Setup */

function setup() {
    createCanvas(400,400);
    
    /* Array Setup */
    var x1 = 50;
    var y1 = 50;
    var x2 = 50;
    var y2 = 50;
  
    for(var i = 0; i < 3; i++)
    {
      myXupperleft[i] = x1;
      myYupperleft[i] = y1;
      mywidth[i] = x2;
      myheight[i] = y2;
        x1 += 50;
        y1 += 50;
        x2 += 50;
        y2 += 50;
        
    }
  }

  function draw() {
    background(220);
    fill(255,0,0)
    stroke(5)
    rect(200, 390, 25, 75);
    fill(0)
    text('Exit', 200, 390);

    /* Call createBorders Function */
    createBorders(15);

    /* Call createMaze Function */
    createMaze(1);

    
    /* Call createCharacterMovement Function */
    createCharacterMovement()
  

   /* Call createCharacter Function */
   createCharacter();
  

  /* Call createScreenText Function  */
  createScreenText()

 /*  Array Draw */
  for(var i = 0; i < myXupperleft.length; i++)
        {
            rect(myXupperleft[i],myYupperleft[i],mywidth[i],myheight[i]);
        }

  }








  
  /* createBorders Function */
  function createBorders(thickness)
{
   // top border
   rect(0,0,width,thickness);
   // left border
   rect(0,0,thickness,height);
   // bottom border
   rect(0, height-thickness,width-250, thickness);
   rect(300, height-thickness,width-250, thickness);
   // right upper border
   rect(width-thickness,0,thickness,height);
}

/* createCharacter Function */
function createCharacter()
{
    fill(0,255,0)
    circle(circleX,circleY,10); 
}

/* createMaze Function */
function createMaze(maze_thickness)
{
strokeWeight(maze_thickness)
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
}

/* createScreenText Function "Get to Exit"/"You Win" Text */
function createScreenText()
{
    if( (circleY <= 400 && circleY >= 375) && (circleX >= 150 && circleX <= 250))
    {
      fill(255)
      text('You Win! Yay!', 25, 15);
    }
    else
    {
      fill(255)
      text('Get To The Exit! (Use WASD to move)', 25, 15);
    } 
}


/* createCharacterMovement Function */
function createCharacterMovement()
{
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
}