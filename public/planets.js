
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

const planetNumbers = {
    1: "Sun",
    2: "Mercury",
    3: "Venus",
    4: "Mars",
    5: "Moon",
    6: "Jupiter",
    7: "Saturn",
    8: "Uranus",
    9: "Neptune",
    10: "Pluto"
}


export class Planet{
    constructor(number){
        this.name = planetNumbers[number];
        this.symbol = planetSymbols[this.name];
    }
}