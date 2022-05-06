var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = 500;
var height = 200;
var gridX = 10
var gridY = 10;

function highRes() {
  // Set display size (css pixels).
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";

  // Set actual size in memory (scaled to account for extra pixel density).
  var scale = devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
  canvas.width = Math.floor(width * scale);
  canvas.height = Math.floor(height * scale);

  // Normalize coordinate system to use css pixels.
  ctx.scale(scale, scale);
}

highRes();

ctx.fillStyle = "#bada55";
ctx.fillRect(10, 10, 300, 300);
ctx.fillStyle = "#ffffff";
ctx.strokeStyle = "#ffffff";
ctx.lineWidth = 2;
ctx.font = "18px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";

var x = 0;
var y = 20;
var stepX = width / gridX;
var stepY = height / gridY;
var newX = x + stepX;
var newY = y + stepY;
var radius = 2.5;

for(j = 0; j < gridY; j++) {
  ctx.beginPath();
  drawLine(x, y, canvas.width, y); // Horizontal lines
  drawLine(newX * j, 0, newX * j, height); // Vertical lines
  ctx.closePath();

  horizontal();
  y += stepY;
  newY = y + stepY;
  x = 0;
  newX = x + stepX;
}


function drawFilledCircle(x, y, radius) {
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function horizontal(row = 10) {
  for(i = 0; i < gridX; i++) {
    ctx.beginPath();
    drawFilledCircle(x, y, radius);
    ctx.closePath();
    x += stepX;
    newX = x + stepX;
  }
}
