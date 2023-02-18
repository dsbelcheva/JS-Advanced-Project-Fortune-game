import { getAscendantSign } from "./ascendant.js";

export function findZodiac(birthday) {
  const zodiacChangeDays = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
  const signs = [
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
  ];
  let month = birthday.getMonth();
  let day = birthday.getDate();
  if (month == 0 && day <= 20) {
    month = 11;
  } else if (day < zodiacChangeDays[month]) {
    month--;
  }
  return signs[month];
}

export function getZodiacByPlanetPosition(degrees) {
  degrees = ((degrees % 360) + 360) % 360;
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

export function getBirthTime(time) {
  if (time !== "") {
    var hours = time.split(":")[0];
    // the minutes won't change the result
    var suffix = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    hours = hours < 10 ? "0" + hours : hours;

    // find better way to determine and find period
    if (suffix === "am") {
      if (hours < 6) {
        return "0-6";
      } else {
        return "6-12";
      }
    } else if (suffix === "pm") {
      if (hours < 6) {
        return "12-18";
      } else {
        return "18-24";
      }
    }
  }
}

export function displayZodiac(zodiac) {
  const zodiacContainer = document.getElementById("horoscope-zodiac-container");
  const zodiacP = document.createElement("h2");
  zodiacP.innerHTML = zodiac.toUpperCase();
  zodiacContainer.appendChild(zodiacP);
  var image = document.images[2];
  var downloadingImage = new Image();
  downloadingImage.onload = function () {
    image.src = this.src;
  };
  let path = "images/" + zodiac + ".png";
  downloadingImage.src = path;
  zodiacContainer.classList.remove("hidden");
}

// latitude must be between 0 and 90
function isValidLatitude(latitude) {
  const latRegex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/;
  return latRegex.test(latitude);
}

// lomgitude must be between 0 and 180
function isValidLongitude(longitude) {
  const lonRegex = /^[-+]?((1[0-7]|[1-9])?\d(\.\d+)?|180(\.0+)?)$/;
  return lonRegex.test(longitude);
}

export function displayAscendant(longitude, latitude, date) {
  if (isValidLatitude(latitude) && isValidLongitude(longitude)) {
    const zodiacContainer = document.getElementById(
      "horoscope-zodiac-container"
    );
    const paragraphEl = document.createElement("h2");
    paragraphEl.innerHTML = "Your ascendant is: " + getAscendantSign(date, latitude, longitude);
    zodiacContainer.appendChild(paragraphEl);
  }
}
