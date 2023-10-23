function setup() {
  createCanvas(400,400);
}

function draw() {
  background(220);
  strokeWeight(6)
  line(75, 350, 125, 200); /* Hair */
  line(325, 350, 275, 200); 
  line(100, 350, 125, 300);
  line(300, 350, 275, 300); 
  line(150, 325, 150, 350); 
  line(250, 325, 250, 350); 
  rect(175,325, 50 , 75) /* Neck */
  ellipse(200,250,140,175); /* Face */
  ellipse(200,190,150,70); /* beanie */
  rect(125,200,150,30) /* beanie fold */
  point(170, 250); /* left eye */
  point(225, 250); /* right eye */
  ellipse(135,275,30,30); /* Left Blush */
  ellipse(265,275,30,30); /* right blush */
  triangle(190, 275, 200, 210, 200, 275); /* Nose  */
  triangle(170, 300, 200, 320, 190, 300); /* mouth  */

}

