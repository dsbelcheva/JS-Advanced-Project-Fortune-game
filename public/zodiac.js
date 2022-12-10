class Elements {
    constructor(zodiac_element){
     if(zodiac_element === "fire"){
        fire: {
            color: "rgba(255,102,102,1.0)"
        }
     }
     if(zodiac_element === "wind"){
        wind: {
            color: "rgba(255,255,102,1.0)"
        }
     }
     if(zodiac_element === "earth"){
        earth: {
            color: "rgba(204,255,204,1.0)"
        }
     }
     if(zodiac_element === "water"){
        water: {
            color: "rgba(153,204,255,1.0)"
        }
     }
    }
}

export let elements = new Elements();