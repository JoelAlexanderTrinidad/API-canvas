const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "red";
ctx.fillStyle = "yellow";
ctx.fillRect(200,200,50,50);
ctx.strokeRect(200,200,50,50);

ctx.beginPath();
ctx.arc(375, 170, 25, 0, Math.PI * 2, false);
ctx.fill();
ctx.stroke();

