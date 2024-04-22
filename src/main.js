const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const { width: w, height: h } = canvas;

ctx.font = "20pt courier"

const center = w / 2;
ctx.textAlign = "center";
for (let i = 0; i < 11; i++) {
ctx.fillText("if you're in the game", center, i * 40); // i * 40 es la coordenada y en cada pasada lo va multiplicando por 40
}
ctx.strokeText("strokes the word", center, h - 30);