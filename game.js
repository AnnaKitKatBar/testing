//HTML canvas
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

//ball variables 
let x = canvas.width/2;
let y = canvas.height - 40;
let dx = 2;
let dy = -2;
let ballRadius = 10;

//paddle variables
let padHeight = 10;
let padWidth = 100;
let padX = ((canvas.width - padWidth)/2);
let padY = canvas.height - padHeight;

//paddle control variables
var padRight = false;
var padLeft = false;

//brick variables
let brickArr = [];
let brickRow = 5;
let brickCol = 5;
let maxBricks = brickRow * brickCol;
let brickWidth = 50;
let brickHeight = 10;
let brickSpace = 5;
let brickX = (canvas.width/2) - (brickCol*brickWidth + (brickCol-1)*brickSpace)/2;
let brickY = 10;
let brickHorizon = brickY + (brickHeight + brickSpace)*brickRow;

//console.log(maxBricks);

//Init brickArr
for(let i = 0; i < maxBricks; i++) {
   brickArr[i] = true;
   console.log("init for loop");
}

////--Drawing Functions START--////
//
function drawBall() {
   ctx.beginPath();
   ctx.arc(x,y,ballRadius,0,Math.PI*2);
   ctx.fillStyle = "#0095DD";
   ctx.fill();
   ctx.closePath();
}

function drawPaddle() {
   ctx.beginPath();
   ctx.rect(padX, padY, padWidth, padHeight);
   ctx.fillStyle = "#0095DD";
   ctx.fill();
   ctx.closePath();
}

function drawBricks() {
   for(let i = 0; i < maxBricks; i++) {
      if(brickArr[i]) {
         let deltaX = (i%brickCol)*(brickWidth + brickSpace);
         let deltaY = Math.floor(i/brickCol)*(brickHeight + brickSpace);
	 //console.log(`${deltaX} ${deltaY}`)
         
         //draw the brick
         ctx.beginPath();
         ctx.rect(brickX + deltaX, brickY + deltaY, brickWidth, brickHeight);
         ctx.fillStyle = "#0095DD";
         ctx.fill();
         ctx.closePath;
      }
   }

}
//
////--Drawing Functions END--////

function draw() {
   ctx.clearRect(0,0,canvas.width, canvas.height);
   
   //draw scene
   drawBall();
   drawPaddle();  
   drawBricks();

  //change moving variables
   //Ball Paddle Collision
   if(padY == (y + ballRadius) && (x >= padX && x <= padX + padWidth)) {
      dy = -dy;
      padBounceSND();
      console.log("Paddle ball hit");
   }

   //Ball Brick Collsion
   let hitBrick = false;
   for(let i = 0; i < maxBricks && !hitBrick; i++){
      if(brickArr[i]){
         let deltaY = brickY + Math.floor(i/brickCol)*(brickHeight + brickSpace) + brickHeight;
         let x1 = brickX + (i%brickCol)*(brickWidth+brickSpace);
         let x2 = x1 + brickWidth;
  
         if(y - ballRadius <= deltaY && x >= x1 && x <= x2) {
            dy = -dy;
            wallBounceSND();
            console.log("Brick Ball hit");
            //console.log(`brickY = ${deltaY}\nballY = ${y - ballRadius}`);
            hitBrick = true;
         }
      
      }

   }

   //Ball Wall Collision
   if(y - ballRadius < 0  || y + ballRadius >= canvas.height) {
      dy = -dy;
      wallBounceSND();
   }
   if(x - ballRadius < 0 || x + ballRadius >= canvas.width) {
      dx = -dx;
      wallBounceSND();
   }

   //Key Press for Paddle Movement
   if(padRight && (padX + padWidth < canvas.width))
      padX += 7;
   if(padLeft && (padX > 0))
      padX -= 7;

   
   x += dx;
   y += dy;
}

//event listeners
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

}


//time btw drawing
setInterval(draw, 25);

