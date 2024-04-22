const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const { width: w, height: h } = canvas;

const img = new Image();
img.src = "../res/images/snowflake.png";
img.addEventListener("load", draw, false);

function draw(){
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * w - 50;
        const y = Math.random() * h - 100;
        ctx.drawImage(img, x, y); // si agregamos dos parámetros más es para escalar la img en ancho y alto por ejemplo ctx.drawImage(img, x, y, 100,100);
    }
}