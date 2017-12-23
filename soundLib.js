//This is a file holding all the sound stuff for testGame

function wallBounceSND() {
   let wallBounce = document.createElement("audio");
   wallBounce.src = "./sounds/waterdrop.wav";
   wallBounce.play();
}

function padBounceSND() {
   let padBounce = document.createElement("audio");
   padBounce.src = "./sounds/sonarPing.wav";
   padBounce.play();
}  


