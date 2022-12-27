import { getHoroscopeByPlanetAndZodiac } from "./database_script.js";
import { Zodiac } from "./zodiac.js";

const planetSymbols = {
    "Sun": "☉",
    "Mercury": "☿",
    "Venus": "♀",
    "Mars": "♂",
    "Moon": "☽",
    "Jupiter": "♃",
    "Saturn": "♄",
    "Uranus": "⛢",
    "Neptune": "♆",
    "Pluto": "♇"
}

export function drawChart() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90;
    draw(ctx,radius);
    getHoroscopeByPlanetAndZodiac("Mars", "Pisces");
}

function draw(ctx, radius) {
    drawFace(ctx, radius);
    drawElements(ctx,radius);
    drawZodiac(ctx, radius);
}

function drawFace(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    // resize
    grad.addColorStop(0, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.001;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fill();
}

function drawZodiac(ctx, radius) {
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (var j = 0; j < 12; j++) {
        let zodiac = new Zodiac(j+1)
        var ax = (radius - 50) * Math.cos(Math.PI * 2 / 12 * j);
        var ay = (radius - 50) * Math.sin(Math.PI * 2 / 12 * j);
        ctx.beginPath();
        ctx.fillText(zodiac.symbol, ax, ay);  
        ctx.fill();
    }
}

function drawElements(ctx, radius){
    for (var i = 0; i < 60; i++) {
        var x = (radius - 20) * Math.cos(Math.PI * 2 / 60 * i);
        var y = (radius - 20) * Math.sin(Math.PI * 2 / 60 * i);
        if (i % 5 === 0) {
            let zodiac = new Zodiac(i/5 + 1)
            ctx.fillStyle = zodiac.element.color;
        } else {
            ctx.fillStyle = "#cccccc";
        }
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
}

// to add: draw planets to the horoscope

function drawPlanets(){


}

drawChart();