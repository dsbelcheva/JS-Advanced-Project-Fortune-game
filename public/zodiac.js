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

export class Zodiac{
    constructor(number){
        this.name = zodiacNumberDict[number];
        this.symbol = zodiacSymbolDict[this.name];
        this.element = new Element(zodiacElementDict[this.name]);
    }
}

// to add: function for getting zodiac sign from birthday

export function findZodiac (birthday) {
    const zodiacChangeDays = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
    const signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
    let month = birthday.getMonth();
    let day = birthday.getDate();
    if (month == 0 && day <= 20){
       month = 11;
    }
    else if (day < zodiacChangeDays[month]){
       month--;
    };
    return signs[month];
};

export function getZodiacByPlanetPosition(degrees) {
    degrees = (degrees % 360 + 360) % 360;
    const zodiacs = [
      { name: "Aries", start: 0, end: 30 },
      { name: "Taurus", start: 30, end: 60 },
      { name: "Gemini", start: 60, end: 90 },
      { name: "Cancer", start: 90, end: 120 },
      { name: "Leo", start: 120, end: 150 },
      { name: "Virgo", start: 150, end: 180 },
      { name: "Libra", start: 180, end: 210 },
      { name: "Scorpio", start: 210, end: 240 },
      { name: "Sagittarius", start: 240, end: 270 },
      { name: "Capricorn", start: 270, end: 300 },
      { name: "Aquarius", start: 300, end: 330 },
      { name: "Pisces", start: 330, end: 360 },
    ];
    for (let zodiac of zodiacs) {
      if (degrees >= zodiac.start && degrees < zodiac.end) {
        return zodiac.name;
      }
    }
    return "Error: Invalid chart degree";
  }