//HTML elements
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let wallBounceSND = document.createElement("audio");


//drawing variables 
let x = canvas.width/2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

//ball variables
let ballRadius = 10;

//paddle variables
let padHeight = 10;
let padWidth = 75;
let padX = ((canvas.width - padWidth)/2);

//paddle control variables
//var padRight = false;
//var padLeft = false;

//audio src init
wallBounceSND.src = "./sounds/waterdrop.wav";


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
   drawPaddle();  

  //change moving variables
   //Ball Wall Collision
   if(y - ballRadius < 0  || y + ballRadius >= canvas.height) {
      dy = -dy;
      wallBounceSND.pause();
      wallBounceSND.play();
   }
   if(x - ballRadius < 0 || x + ballRadius >= canvas.width) {
      dx = -dx;
      wallBounceSND.pause();
      wallBounceSND.play();
   }

   
   x += dx;
   y += dy;

   //Paddle Movement
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

