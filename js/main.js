let canvas = document.createElement("canvas");
canvas.width = 200;
canvas.height = 300;
let ctx = canvas.getContext("2d");

// construct test shape
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 0);
ctx.lineTo(50, 100);
ctx.lineTo(40, 150);
ctx.lineTo(50, 300);
ctx.lineTo(80, 300);
ctx.lineTo(80, 150);
ctx.lineTo(120, 150);
ctx.lineTo(120, 300);
ctx.lineTo(150, 300);
ctx.lineTo(160, 150);
ctx.lineTo(150, 100);
ctx.lineTo(150, 0);
ctx.lineTo(50, 0);
ctx.fill();

document.body.appendChild(canvas)
