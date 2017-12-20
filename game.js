var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//drawing variables 
var x = canvas.width/2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;

//ball variables
var ballRadius = 10;

//paddle variables
//var padHeight = 10;
//var padWidth = 75;
//var padX = (canvas.width - paddleWidth)/2);

//paddle control variables
//var padRight = false;
//var padLeft = false;


function drawBall() {
   ctx.beginPath();
   ctx.arc(x,y,ballRadius,0,Math.PI*2);
   ctx.fillStyle = "#0095DD";
   ctx.fill();
   ctx.closePath();
}

function drawPaddle() {
   ctx.beginPath();
   ctx.rect(padX, canvas.height-padHeight, padWidth, padHeight);
   ctx.fillStyle = "#0095DD";
   ctx.fill();
   ctx.closePath();
}

function draw() {
   ctx.clearRect(0,0,canvas.width, canvas.height);
   
   //draw scene
   drawBall();
   //drawPaddle();  

  //change moving variables
   //Ball Movement
   if(y - ballRadius < 0  || y + ballRadius > canvas.height)
      dy = -dy;

   if(x - ballRadius < 0 || x + ballRadius > canvas.width)
      dx = -dx;
   
   //Paddle Movement



   x += dx;
   y += dy;
}

/*//event listeners
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
   
   if(e.keyCode == 39)
      padRight = true;
   else if(e.keyCode == 37)
      padLeft = true;

}

function keyUpHandler(e) {
   if(e.keyCode == 39)
      padRight = false;
   else if(e.keyCode == 37)
      padLeft = false;

}*/


//time btw drawing
setInterval(draw, 25);

