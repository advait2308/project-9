var ball;
function setup() {
  createCanvas(400,400);
ball = createSprite(200,200,20,20);

}

function draw() 
{
  background('red');
  if(keyIsDown(RIGHT_ARROW)) {
    ball.position.x = ball.position.x +5;
  }

if(keyIsDown(LEFT_ARROW)) {
  ball.position.x = ball.position.x -3;
}



  drawSprites(); 
}

if (keyIsDown(DOWN_ARROW)) 
{
  background = ('blue');
}


  






 




