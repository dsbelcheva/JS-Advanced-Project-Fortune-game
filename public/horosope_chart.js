import { Zodiac } from "./zodiac.js";
console.log("hey");

const zodiacNumberDict = {
    1: "Aries",
    2:"Taurus",
    3:"Gemini",
    4:"Cancer",
    5:"Leo",
    6:"Virgo",
    7:"Libra",
    8:"Scorpio",
    9:"Sagittarius",
    10:"Capricorn",
    11:"Aquarius",
    12:"Pisces"
}

export function drawChart() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90
    draw(ctx,radius);
}

function draw(ctx, radius) {
    drawFace(ctx, radius);
    drawZodiac(ctx, radius);
}

function drawFace(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fill();
}


function drawZodiac(ctx, radius) {
    var ang;
    var zodiacNum;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (zodiacNum = 1; zodiacNum < 13; zodiacNum++) {
        let zodiac = new Zodiac(zodiacNumberDict[zodiacNum])
        ang = zodiacNum * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(zodiac.symbol, 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}

drawChart();