const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const { width, height } = canvas;

ctx.fillStyle = "black";
ctx.fillRect(0,0,width,height);
ctx.fillStyle = "#555";


let x, y, radius;

for(let i=0; i < 550; i++){
    x = Math.random() * width;
    y = Math.random() * height;
    radius = Math.random() * 3;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
}