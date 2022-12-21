class Element {
    constructor(zodiac_element){
     if(zodiac_element === "fire"){
        this.color = "rgba(204,0,0,1.0)";
     }
     else if(zodiac_element === "wind"){
        this.color =  "rgba(255,128,0,1.0)";
     }
     else if(zodiac_element === "earth"){
        this.color =  "rgba(0,153,76,1.0)";
     }
     else {
        this.color = "rgba(153,204,255,1.0)";
     }
    }
}
 const zodiacSymbolDict = {
    "Aries":"♈", 
    "Taurus":"♉",
    "Gemini": "♊",
    "Cancer": "♋",
    "Leo": "♌",
    "Virgo": "♍",
    "Libra": "♎",
    "Scorpio": "♏",
    "Sagittarius": "♐",
    "Capricorn": "♑",
    "Aquarius": "♒",
    "Pisces": "♓"
};
const zodiacElementDict= {
    "Aries":"fire",
    "Taurus":"earth",
    "Gemini": "wind",
    "Cancer": "water",
    "Leo": "fire",
    "Virgo": "earth",
    "Libra": "wind",
    "Scorpio": "water",
    "Sagittarius": "fire",
    "Capricorn": "earth",
    "Aquarius": "wind",
    "Pisces": "water"
};

export class Zodiac{
    constructor(name){
        this.name = name;
        this.symbol = zodiacSymbolDict[name];
        this.element = new Element(zodiacElementDict[name]);
    }
}

// to add: function for getting zodiac sign from birthday