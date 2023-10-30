/* Variables */

var blushleftX = 135;
var blushlefty = 275;
var blushleftdiameter = 30;
var blushdirection = 1;

var blushrightX = 265;
var blushrighty = 275;
var blushrightdiameter = 30;
var blushdirectionright = 1;

var nosebottomleftx = 190;
var nosebottomlefty = 275;
var nosetoppointx = 200;
var nosetoppointy = 210;
var nosebottomrightx = 200;
var nosebottomrighty = 275;

var mouthbottomleftx = 170;
var mouthbottomlefty = 300;
var mouthtoppointx = 200;
var mouthtoppointy = 320;
var mouthbottomrightx = 190;
var mouthbottomrighty = 300;

var mouthnosedirection = 1;

var signaturex = 250;
var signaturey = 390;
var signaturedirection = -1;


var size = 32;
var count = 0;
var sizeDirection = 2;



function setup() {
  createCanvas(400,400);
}

function draw() {
  background(220);
  strokeWeight(6)
  /* Hair */
  line(75, 350, 125, 200);
  line(325, 350, 275, 200); 
  line(100, 350, 125, 300);
  line(300, 350, 275, 300); 
  line(150, 325, 150, 350); 
  line(250, 325, 250, 350); 

  /* Neck */
  rect(175,325, 50 , 75) 

  /* Face */
  ellipse(200,250,140,175);

  /* beanie */
  ellipse(200,190,150,70); 
  /* beanie fold */
  rect(125,200,150,30)

  /* left eye */
  point(170, 250);
  /* right eye */
  point(225, 250);

  /* Left Blush */
  /*  circle(135,275,30);  */
  circle(blushleftX,blushlefty,blushleftdiameter);
  blushleftX+=blushdirection;
  if(blushleftX >= 150 || blushleftX <= 120)
  {
     blushdirection *= -1;
  }

  
  /* right blush */
  /* circle(265,275,30);  */
  circle(blushrightX,275,30);
  blushrightX+=blushdirectionright;
  if(blushrightX >= 280 || blushrightX <= 250)
  {
      blushdirectionright *= -1;
  }


  /* Nose  */
/* triangle(190, 275, 200, 210, 200, 275);  */
 triangle(nosebottomleftx, nosebottomlefty, nosetoppointx, nosetoppointy, nosebottomrightx, nosebottomrighty);
  nosebottomlefty+=mouthnosedirection;
  nosetoppointy+=mouthnosedirection;
  nosebottomrighty+=mouthnosedirection;
  if(nosebottomlefty >= 285 || nosebottomlefty <= 265)
  {
     mouthnosedirection *= -1;
  }
  if(nosetoppointy >= 220 || nosetoppointy <= 200)
  {
     mouthnosedirection *= -1;
  }
  if(nosebottomrighty >= 285 || nosebottomrighty <= 265)
  {
     mouthnosedirection *= -1;
  }

  /* mouth  */
  /* triangle(170, 300, 200, 320, 190, 300);  */
   triangle(mouthbottomleftx, mouthbottomlefty, mouthtoppointx, mouthtoppointy, mouthbottomrightx, mouthbottomrighty);
   mouthbottomlefty+=mouthnosedirection;
   mouthtoppointy+=mouthnosedirection;
   mouthbottomrighty+=mouthnosedirection;

   if(mouthbottomlefty >= 315 || mouthbottomlefty <= 285)
  {
     mouthnosedirection *= -1;
  } 
  if(mouthtoppointy >= 335 || mouthtoppointy <= 305)
  {
     mouthnosedirection *= -1;
  } 
  if(mouthbottomrighty >= 315 || mouthbottomrighty <= 285)
  {
     mouthnosedirection *= -1;
  } 




  /* Title */
  textSize(size);
  size+=sizeDirection
  text('Feeling Off', 50, 50);
  count++;
  if(count > 5)
  {
      sizeDirection *=-1;
      count = 0;
  }
  

  /* Signature */
  textSize(14);
  text('Kaylee Holdsambeck', signaturex, signaturey);
  signaturex+=signaturedirection
  signaturey+=signaturedirection

  if(signaturex >= 251 || signaturex <= 249)
  {
     signaturedirection *= -1;
  } 
  if(signaturey >= 391 || signaturey <= 389)
  {
     signaturedirection *= -1;
  } 
}

